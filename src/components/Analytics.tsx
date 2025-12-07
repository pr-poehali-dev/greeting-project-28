import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Analytics = () => {
  const salesData = [
    { month: 'Янв', sales: 45000, orders: 120 },
    { month: 'Фев', sales: 52000, orders: 145 },
    { month: 'Мар', sales: 48000, orders: 132 },
    { month: 'Апр', sales: 61000, orders: 168 },
    { month: 'Май', sales: 58000, orders: 155 },
    { month: 'Июн', sales: 72000, orders: 195 },
    { month: 'Июл', sales: 68000, orders: 180 },
    { month: 'Авг', sales: 75000, orders: 205 },
    { month: 'Сен', sales: 82000, orders: 225 },
    { month: 'Окт', sales: 91000, orders: 248 },
    { month: 'Ноя', sales: 95000, orders: 260 },
    { month: 'Дек', sales: 105000, orders: 290 }
  ];

  const topProducts = [
    { name: 'Беспроводные наушники', sold: 342, revenue: 1708580 },
    { name: 'Кроссовки Premium', sold: 287, revenue: 2008130 },
    { name: 'Умные часы', sold: 245, revenue: 2204755 },
    { name: 'Кожаный рюкзак', sold: 198, revenue: 1187802 },
    { name: 'Стильная футболка', sold: 156, revenue: 389844 }
  ];

  const customerBehavior = [
    { metric: 'Средний чек', value: '4 850 ₽', change: '+12%', icon: 'TrendingUp' },
    { metric: 'Повторные покупки', value: '38%', change: '+5%', icon: 'RefreshCw' },
    { metric: 'Время на сайте', value: '8 мин', change: '+2 мин', icon: 'Clock' },
    { metric: 'Конверсия', value: '3.2%', change: '+0.5%', icon: 'Target' }
  ];

  const maxSales = Math.max(...salesData.map(d => d.sales));
  const maxOrders = Math.max(...salesData.map(d => d.orders));

  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-lg px-4 py-2">📊 Аналитика</Badge>
          <h2 className="text-6xl font-bold mb-6">Панель управления</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Отслеживайте продажи, статистику и поведение покупателей
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="animate-fade-in hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Выручка</span>
                <Icon name="DollarSign" size={20} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-1">752 000 ₽</div>
              <Badge className="text-xs bg-green-100 text-green-700">+18% от прошлого месяца</Badge>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-xl transition-all" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Заказы</span>
                <Icon name="ShoppingCart" size={20} className="text-blue-500" />
              </div>
              <div className="text-3xl font-bold mb-1">2 265</div>
              <Badge className="text-xs bg-blue-100 text-blue-700">+15% от прошлого месяца</Badge>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-xl transition-all" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Клиенты</span>
                <Icon name="Users" size={20} className="text-purple-500" />
              </div>
              <div className="text-3xl font-bold mb-1">1 847</div>
              <Badge className="text-xs bg-purple-100 text-purple-700">+22% новых</Badge>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-xl transition-all" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Рейтинг</span>
                <Icon name="Star" size={20} className="text-yellow-500" />
              </div>
              <div className="text-3xl font-bold mb-1">4.9</div>
              <Badge className="text-xs bg-yellow-100 text-yellow-700">1200+ отзывов</Badge>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sales" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="sales" className="gap-2">
              <Icon name="TrendingUp" size={16} />
              Продажи
            </TabsTrigger>
            <TabsTrigger value="products" className="gap-2">
              <Icon name="Package" size={16} />
              Топ товары
            </TabsTrigger>
            <TabsTrigger value="behavior" className="gap-2">
              <Icon name="Users" size={16} />
              Поведение
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sales">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">График продаж за 2024 год</CardTitle>
                <CardDescription>Динамика выручки и количества заказов по месяцам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Выручка</h4>
                      <Badge>Всего: {salesData.reduce((acc, d) => acc + d.sales, 0).toLocaleString('ru-RU')} ₽</Badge>
                    </div>
                    <div className="flex items-end gap-2 h-64">
                      {salesData.map((data, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg hover:opacity-80 transition-opacity relative group" 
                               style={{ height: `${(data.sales / maxSales) * 100}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {data.sales.toLocaleString('ru-RU')} ₽
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{data.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Количество заказов</h4>
                      <Badge variant="secondary">Всего: {salesData.reduce((acc, d) => acc + d.orders, 0)} заказов</Badge>
                    </div>
                    <div className="flex items-end gap-2 h-48">
                      {salesData.map((data, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full bg-gradient-to-t from-blue-400 to-blue-600 rounded-t-lg hover:opacity-80 transition-opacity relative group" 
                               style={{ height: `${(data.orders / maxOrders) * 100}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {data.orders} заказов
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{data.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Топ-5 товаров по продажам</CardTitle>
                <CardDescription>Самые популярные товары в этом месяце</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-accent/50 rounded-xl hover:bg-accent transition-colors">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl text-white font-bold text-xl">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">Продано: {product.sold} шт.</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{product.revenue.toLocaleString('ru-RU')} ₽</div>
                        <p className="text-sm text-muted-foreground">выручка</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Поведение покупателей</CardTitle>
                <CardDescription>Ключевые метрики активности клиентов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {customerBehavior.map((item, idx) => (
                    <div key={idx} className="p-6 bg-gradient-to-br from-accent/50 to-accent rounded-2xl hover:shadow-lg transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <Icon name={item.icon as any} size={32} className="text-primary" />
                        <Badge className="bg-green-100 text-green-700">{item.change}</Badge>
                      </div>
                      <div className="text-4xl font-bold mb-2">{item.value}</div>
                      <div className="text-muted-foreground">{item.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Источники трафика</h4>
                    <div className="space-y-3">
                      {[
                        { source: 'Прямые заходы', percent: 42, color: 'bg-blue-500' },
                        { source: 'Социальные сети', percent: 28, color: 'bg-purple-500' },
                        { source: 'Поисковые системы', percent: 20, color: 'bg-green-500' },
                        { source: 'Реклама', percent: 10, color: 'bg-orange-500' }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">{item.source}</span>
                            <span className="text-sm font-semibold">{item.percent}%</span>
                          </div>
                          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full transition-all duration-500`} 
                                 style={{ width: `${item.percent}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Популярное время покупок</h4>
                    <div className="flex items-end gap-2 h-32">
                      {[12, 18, 25, 35, 48, 52, 45, 38, 42, 55, 50, 40, 32, 28, 22, 18, 24, 35, 48, 58, 52, 45, 35, 20].map((value, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t hover:opacity-80 transition-opacity" 
                               style={{ height: `${(value / 58) * 100}%` }}></div>
                          {idx % 3 === 0 && <span className="text-xs text-muted-foreground">{idx}:00</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Analytics;
