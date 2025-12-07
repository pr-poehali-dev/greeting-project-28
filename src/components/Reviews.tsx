import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Анна Смирнова',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      rating: 5,
      date: '15 ноября 2024',
      text: 'Потрясающий магазин! Заказала несколько вещей, все пришло в идеальном состоянии. Качество на высоте, дизайн просто огонь. Буду заказывать еще!',
      product: 'Стильная футболка'
    },
    {
      name: 'Дмитрий Козлов',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      rating: 5,
      date: '10 ноября 2024',
      text: 'Наушники превзошли все ожидания! Звук чистый, басы глубокие. Доставка быстрая, упаковка отличная. Рекомендую всем!',
      product: 'Беспроводные наушники'
    },
    {
      name: 'Екатерина Волкова',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      rating: 5,
      date: '5 ноября 2024',
      text: 'Купила рюкзак и не могу нарадоваться! Качество кожи потрясающее, все швы ровные. Выглядит очень стильно и дорого.',
      product: 'Кожаный рюкзак'
    },
    {
      name: 'Алексей Петров',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      rating: 4,
      date: '1 ноября 2024',
      text: 'Отличный магазин с необычными товарами. Немного долго ждал доставку, но это того стоило. Качество товара на 5+.',
      product: 'Умные часы'
    },
    {
      name: 'Мария Соколова',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
      rating: 5,
      date: '28 октября 2024',
      text: 'Эко-сумка просто супер! Крепкая, вместительная и очень красивая. Приятно, что магазин заботится об экологии.',
      product: 'Эко-сумка'
    },
    {
      name: 'Игорь Новиков',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      rating: 5,
      date: '20 октября 2024',
      text: 'Кроссовки невероятно удобные! Сидят как влитые, выглядят стильно. Поддержка была на высоте, помогли с выбором размера.',
      product: 'Кроссовки Premium'
    }
  ];

  const stats = [
    { value: '4.9', label: 'Средний рейтинг', icon: 'Star' },
    { value: '1200+', label: 'Отзывов', icon: 'MessageCircle' },
    { value: '98%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
    { value: '5000+', label: 'Заказов', icon: 'Package' }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon 
            key={i} 
            name="Star" 
            size={16} 
            className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-lg px-4 py-2">⭐ Отзывы</Badge>
          <h2 className="text-6xl font-bold mb-6">Что говорят наши клиенты</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Нам доверяют тысячи покупателей по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="p-6">
                <Icon name={stat.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </div>
                {renderStars(review.rating)}
                <p className="text-muted-foreground my-4 leading-relaxed">
                  {review.text}
                </p>
                <Badge variant="secondary" className="mt-2">
                  <Icon name="Package" size={12} className="mr-1" />
                  {review.product}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
