import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartProps {
  items: any[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Cart = ({ items, isOpen, onClose, onUpdateQuantity }: CartProps) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-3xl flex items-center gap-3">
            <Icon name="ShoppingCart" size={28} />
            Корзина
          </SheetTitle>
          <SheetDescription>
            {items.length > 0 
              ? `У вас ${items.length} ${items.length === 1 ? 'товар' : 'товаров'} в корзине`
              : 'Ваша корзина пуста'}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Icon name="ShoppingBag" size={64} className="text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">Начните делать покупки!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-accent/50 rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">
                      {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="flex items-center gap-2 bg-background rounded-xl p-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <>
            <Separator className="my-4" />
            <SheetFooter className="flex-col gap-4">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>Итого:</span>
                <span className="text-primary">{total.toLocaleString('ru-RU')} ₽</span>
              </div>
              <Button size="lg" className="w-full text-lg py-6 rounded-2xl gap-2">
                <Icon name="CreditCard" size={20} />
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="w-full text-lg py-6 rounded-2xl" onClick={onClose}>
                Продолжить покупки
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
