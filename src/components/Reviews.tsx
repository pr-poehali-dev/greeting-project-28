import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'София Белова',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
      rating: 5,
      date: '3 декабря 2025',
      text: 'Невероятный сервис! Заказала кроссовки и рюкзак — все идеально упаковано, быстрая доставка. Качество премиум, дизайн обалденный!',
      product: 'Кроссовки Premium'
    },
    {
      name: 'Максим Орлов',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
      rating: 5,
      date: '28 ноября 2025',
      text: 'Покупал умные часы — функционал потрясающий! Батарея держит неделю, дизайн элегантный. Магазин топ, буду заказывать еще.',
      product: 'Умные часы'
    },
    {
      name: 'Александра Кузнецова',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200',
      rating: 5,
      date: '20 ноября 2025',
      text: 'Заказала эко-сумку и несколько футболок. Все супер! Материалы качественные, экологичные. Рада поддержать такой классный магазин.',
      product: 'Эко-сумка'
    },
    {
      name: 'Артём Васильев',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      rating: 5,
      date: '15 ноября 2025',
      text: 'Наушники просто огонь! Звук чище, чем у брендовых моделей вдвое дороже. Доставка за день, упаковка премиальная. 10/10!',
      product: 'Беспроводные наушники'
    },
    {
      name: 'Виктория Морозова',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200',
      rating: 5,
      date: '8 ноября 2025',
      text: 'Рюкзак из кожи — моя лучшая покупка в этом году! Выглядит дорого, вместительный и удобный. Спасибо за качество!',
      product: 'Кожаный рюкзак'
    },
    {
      name: 'Даниил Романов',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      rating: 5,
      date: '1 ноября 2025',
      text: 'Креативный подход к выбору товаров! Каждая вещь уникальная. Купил футболку — качество ткани отменное, принт не выцветает.',
      product: 'Стильная футболка'
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