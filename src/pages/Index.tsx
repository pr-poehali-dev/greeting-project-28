import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import Analytics from '@/components/Analytics';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Delivery from '@/components/Delivery';
import Reviews from '@/components/Reviews';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Стильная футболка',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      category: 'Одежда',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Беспроводные наушники',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      category: 'Электроника',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Эко-сумка',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
      category: 'Аксессуары',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Умные часы',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      category: 'Электроника',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Кожаный рюкзак',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      category: 'Аксессуары',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Кроссовки Premium',
      price: 6999,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      category: 'Обувь',
      rating: 4.9
    }
  ];

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartOpen(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero />
            <section className="py-20 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                  <Badge className="mb-4 text-lg px-4 py-2">✨ Популярные товары</Badge>
                  <h2 className="text-5xl font-bold mb-4">Наши бестселлеры</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Товары, которые выбирают наши клиенты
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product, idx) => (
                    <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <ProductCard product={product} onAddToCart={addToCart} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'catalog':
        return (
          <section className="py-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold mb-12 text-center">Каталог товаров</h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-8 flex justify-center">
                  <TabsTrigger value="all">Все товары</TabsTrigger>
                  <TabsTrigger value="clothes">Одежда</TabsTrigger>
                  <TabsTrigger value="electronics">Электроника</TabsTrigger>
                  <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="clothes">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.filter(p => p.category === 'Одежда' || p.category === 'Обувь').map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="electronics">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.filter(p => p.category === 'Электроника').map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="accessories">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.filter(p => p.category === 'Аксессуары').map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        );
      case 'about':
        return <About />;
      case 'contacts':
        return <Contacts />;
      case 'delivery':
        return <Delivery />;
      case 'reviews':
        return <Reviews />;
      case 'analytics':
        return <Analytics />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <Navigation 
        currentSection={currentSection} 
        onNavigate={setCurrentSection}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />
      {renderSection()}
      <Cart 
        items={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Index;
