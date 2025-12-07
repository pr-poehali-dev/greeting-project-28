import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@creativeshop.ru',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Креативная, 42',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      value: 'Пн-Пт: 10:00 - 21:00',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6">Контакты</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={contact.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{contact.title}</h4>
                <p className="text-muted-foreground">{contact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Напишите нам</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" className="h-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тема сообщения</label>
                <Input placeholder="Вопрос о заказе" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите подробнее..."
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button size="lg" className="w-full text-lg py-6 rounded-2xl gap-2">
                <Icon name="Send" size={20} />
                Отправить сообщение
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contacts;
