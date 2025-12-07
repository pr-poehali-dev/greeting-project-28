import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/30"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-block mb-6 animate-scale-in">
          <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <Icon name="Sparkles" className="text-primary" size={20} />
            <span className="text-sm font-medium">Новая коллекция 2025</span>
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Творчество в каждой покупке
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Откройте для себя уникальные товары, созданные с любовью и вниманием к деталям
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="text-lg px-8 py-6 rounded-2xl gap-3 hover:scale-105 transition-transform">
            <Icon name="ShoppingBag" size={24} />
            Начать покупки
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl gap-3 hover:scale-105 transition-transform">
            <Icon name="PlayCircle" size={24} />
            Смотреть видео
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Товаров</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-sm text-muted-foreground">Клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Рейтинг</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
