import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const methods = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      time: '1-2 дня',
      price: 'От 300 ₽',
      description: 'Доставим заказ прямо к вашей двери в удобное время',
      features: ['Выбор времени', 'Примерка перед оплатой', 'Оплата картой/наличными']
    },
    {
      icon: 'Package',
      title: 'Пункты выдачи',
      time: '2-3 дня',
      price: 'От 150 ₽',
      description: 'Более 1000 пунктов выдачи по всей России',
      features: ['Удобные локации', 'Хранение 5 дней', 'Примерка на месте']
    },
    {
      icon: 'Home',
      title: 'Постаматы',
      time: '1-3 дня',
      price: 'От 100 ₽',
      description: 'Круглосуточная выдача заказов из автоматических ячеек',
      features: ['24/7 доступ', 'Быстрое получение', 'Хранение 3 дня']
    }
  ];

  const steps = [
    { icon: 'ShoppingCart', title: 'Оформите заказ', description: 'Выберите товары и добавьте в корзину' },
    { icon: 'MapPin', title: 'Выберите способ доставки', description: 'Курьер, пункт выдачи или постамат' },
    { icon: 'CreditCard', title: 'Оплатите удобным способом', description: 'Онлайн или при получении' },
    { icon: 'PackageCheck', title: 'Получите заказ', description: 'В выбранном месте и времени' }
  ];

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-lg px-4 py-2">🚚 Доставка</Badge>
          <h2 className="text-6xl font-bold mb-6">Способы доставки</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Выберите удобный способ получения вашего заказа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {methods.map((method, idx) => (
            <Card key={idx} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={method.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {method.time}
                  </Badge>
                  <Badge className="text-base px-3 py-1">
                    {method.price}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">Как это работает</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                    <Icon name={step.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 animate-fade-in">
          <CardContent className="p-8 md:p-12 text-center">
            <Icon name="Gift" size={48} className="mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-bold mb-4">Бесплатная доставка</h3>
            <p className="text-xl text-muted-foreground mb-6">
              При заказе от 3000 ₽ доставка по Москве абсолютно бесплатна!
            </p>
            <Badge className="text-lg px-6 py-3">
              Экономьте на доставке
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Delivery;
