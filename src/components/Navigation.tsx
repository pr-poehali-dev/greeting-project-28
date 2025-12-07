import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

const Navigation = ({ currentSection, onNavigate, cartCount, onCartClick }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
    { id: 'about', label: 'О нас', icon: 'Info' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'reviews', label: 'Отзывы', icon: 'Star' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
    { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CreativeShop</h1>
              <p className="text-sm text-muted-foreground">Ваш стильный магазин</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={onCartClick}
            className="relative gap-2"
          >
            <Icon name="ShoppingCart" size={20} />
            <span>Корзина</span>
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center">
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>

        <div className="lg:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentSection === item.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onNavigate(item.id)}
              className="gap-2 whitespace-nowrap"
            >
              <Icon name={item.icon as any} size={16} />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
