import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
  };
  onAddToCart: (product: any) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
          {product.category}
        </Badge>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button 
            className="w-full gap-2 bg-white text-black hover:bg-white/90"
            onClick={() => onAddToCart(product)}
          >
            <Icon name="ShoppingCart" size={18} />
            Быстрый просмотр
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground ml-2">(120 отзывов)</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-primary">
            {product.price.toLocaleString('ru-RU')} ₽
          </div>
          <Button 
            size="icon" 
            className="rounded-full w-12 h-12 hover:scale-110 transition-transform"
            onClick={() => onAddToCart(product)}
          >
            <Icon name="Plus" size={20} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
