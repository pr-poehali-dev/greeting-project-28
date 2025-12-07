import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'С любовью',
      description: 'Каждый товар отобран с особым вниманием к качеству и дизайну'
    },
    {
      icon: 'Sparkles',
      title: 'Креативность',
      description: 'Уникальные и необычные товары, которые вдохновляют'
    },
    {
      icon: 'Users',
      title: 'Для людей',
      description: 'Мы создаем сообщество единомышленников и ценителей прекрасного'
    },
    {
      icon: 'Leaf',
      title: 'Экологично',
      description: 'Заботимся об окружающей среде и поддерживаем эко-бренды'
    }
  ];

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6">О нас</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CreativeShop — это больше, чем магазин. Это пространство, где встречаются 
            стиль, качество и вдохновение.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" 
              alt="О магазине"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-4xl font-bold mb-6">Наша история</h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Мы начали в 2020 году с простой идеи: создать магазин, где каждый найдет 
              что-то особенное. Сегодня мы работаем с лучшими брендами и дизайнерами, 
              чтобы предложить вам уникальные товары.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша команда тщательно отбирает каждый товар, следит за трендами и 
              всегда готова помочь с выбором.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={value.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
