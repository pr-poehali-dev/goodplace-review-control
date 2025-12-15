import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'cabinet'>('home');

  const testimonials = [
    "Это самый удобный сервис!",
    "Лучшая тех. поддержка",
    "Рейтинг вырос на 2 балла",
    "Отличный результат!",
    "Профессионалы своего дела"
  ];

  const services = [
    {
      title: "Мониторинг отзывов",
      description: "Отслеживание всех отзывов в реальном времени",
      icon: "Eye"
    },
    {
      title: "Работа с негативом",
      description: "Профессиональная обработка негативных комментариев",
      icon: "Shield"
    },
    {
      title: "Написание статей",
      description: "Контент-маркетинг для укрепления репутации",
      icon: "FileText"
    },
    {
      title: "PR-кампании",
      description: "Комплексное продвижение вашего бизнеса",
      icon: "TrendingUp"
    }
  ];

  const pricingPlans = [
    {
      name: "Старт",
      price: "9 990",
      features: [
        "До 50 отзывов в месяц",
        "Мониторинг 2 площадок",
        "Базовая аналитика",
        "Email поддержка"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "24 990",
      features: [
        "До 200 отзывов в месяц",
        "Мониторинг 5 площадок",
        "Продвинутая аналитика",
        "Приоритетная поддержка",
        "Работа с негативом"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "49 990",
      features: [
        "Безлимитные отзывы",
        "Все площадки",
        "AI-аналитика",
        "Личный менеджер 24/7",
        "PR-кампании",
        "Написание статей"
      ],
      popular: false
    }
  ];

  const articles = [
    {
      title: "Почему отзывы важны для бизнеса",
      description: "92% клиентов читают отзывы перед покупкой. Узнайте, как управлять репутацией эффективно.",
      readTime: "5 мин"
    },
    {
      title: "Как работает мониторинг отзывов",
      description: "Автоматизация процесса отслеживания отзывов на всех площадках в режиме реального времени.",
      readTime: "7 мин"
    },
    {
      title: "Работа с негативными отзывами",
      description: "Превратите негатив в возможность улучшить сервис и показать заботу о клиентах.",
      readTime: "6 мин"
    }
  ];

  const statsData = {
    totalReviews: 1247,
    positiveReviews: 1089,
    neutralReviews: 112,
    negativeReviews: 46,
    averageRating: 4.7,
    responseRate: 94,
    responseTime: "2.3 ч"
  };

  return (
    <div className="min-h-screen bg-white">
      {activeSection === 'home' ? (
        <>
          <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">GoodPlace</h1>
                    <p className="text-xs text-gray-500">Хорошему Бизнесу - Хороший Отзыв</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <a href="#services" className="text-sm hover:text-gray-600 transition-colors">Услуги</a>
                  <a href="#pricing" className="text-sm hover:text-gray-600 transition-colors">Тарифы</a>
                  <a href="#portfolio" className="text-sm hover:text-gray-600 transition-colors">Портфолио</a>
                  <a href="#articles" className="text-sm hover:text-gray-600 transition-colors">Статьи</a>
                  <a href="#contacts" className="text-sm hover:text-gray-600 transition-colors">Контакты</a>
                  <Button onClick={() => setActiveSection('cabinet')} variant="outline" size="sm">
                    <Icon name="User" size={16} className="mr-2" />
                    Кабинет
                  </Button>
                </div>
              </div>
            </nav>
          </header>

          <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Тропа к успеху<br />вашего бизнеса
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                  Управляйте репутацией, отвечайте на отзывы и растите вместе с довольными клиентами
                </p>
              </div>

              <div className="relative min-h-[400px] mb-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-4xl">
                    {[...Array(5)].map((_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="flex items-center justify-center gap-4 mb-8 animate-fade-in"
                        style={{ animationDelay: `${rowIndex * 0.2}s` }}
                      >
                        {rowIndex % 2 === 0 ? (
                          <>
                            {[...Array(5)].map((_, starIndex) => (
                              <div
                                key={starIndex}
                                className="text-4xl animate-scale-in"
                                style={{ animationDelay: `${(rowIndex * 0.2) + (starIndex * 0.1)}s` }}
                              >
                                ⭐
                              </div>
                            ))}
                          </>
                        ) : (
                          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: `${rowIndex * 0.2}s` }}>
                            <p className="text-sm font-medium">{testimonials[Math.floor(rowIndex / 2)]}</p>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="flex justify-center mt-12">
                      <div className="bg-black text-white rounded-full px-8 py-4 flex items-center gap-3 shadow-lg animate-scale-in" style={{ animationDelay: '1s' }}>
                        <Icon name="TrendingUp" size={24} />
                        <span className="font-semibold">Ваш успешный бизнес</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                  Начать бесплатно
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </section>

          <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
                <p className="text-gray-600">Комплексное управление репутацией вашего бизнеса</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon as any} size={24} />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
                <p className="text-gray-600">Выберите подходящий план для вашего бизнеса</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'border-black shadow-xl scale-105' : 'border-gray-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-black text-white">Популярный</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-600"> ₽/мес</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Выбрать план
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
                <p className="text-gray-600">Результаты наших клиентов</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { company: "Ресторан \"Вкусно\"", rating: "4.2 → 4.8", reviews: "+230 отзывов" },
                  { company: "Салон красоты \"Блеск\"", rating: "3.9 → 4.7", reviews: "+180 отзывов" },
                  { company: "Автосервис \"Мастер\"", rating: "4.0 → 4.9", reviews: "+340 отзывов" }
                ].map((item, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.company}</CardTitle>
                      <div className="flex items-center gap-4 mt-4">
                        <div>
                          <p className="text-sm text-gray-600">Рейтинг</p>
                          <p className="text-xl font-bold">{item.rating}</p>
                        </div>
                        <Separator orientation="vertical" className="h-12" />
                        <div>
                          <p className="text-sm text-gray-600">Отзывы</p>
                          <p className="text-xl font-bold">{item.reviews}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="articles" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Статьи</h2>
                <p className="text-gray-600">Полезная информация об управлении репутацией</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Icon name="Clock" size={16} />
                        <span>{article.readTime}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                      <CardDescription>{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="p-0">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="contacts" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Присоединяйтесь к 500+ компаниям, которые доверяют нам свою репутацию
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="rounded-full px-8">
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Связаться с нами
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@goodplace.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-black" />
                  </div>
                  <span className="font-semibold">GoodPlace</span>
                </div>
                <p className="text-sm text-gray-400">© 2024 GoodPlace. Все права защищены.</p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b border-gray-200">
            <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <h1 className="text-xl font-bold">Личный кабинет</h1>
                </div>
                <Button onClick={() => setActiveSection('home')} variant="outline" size="sm">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  На главную
                </Button>
              </div>
            </nav>
          </header>

          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardDescription>Всего отзывов</CardDescription>
                  <CardTitle className="text-3xl">{statsData.totalReviews}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Icon name="TrendingUp" size={16} />
                    <span>+12% за месяц</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardDescription>Средний рейтинг</CardDescription>
                  <CardTitle className="text-3xl">{statsData.averageRating}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardDescription>Скорость ответа</CardDescription>
                  <CardTitle className="text-3xl">{statsData.responseTime}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={statsData.responseRate} className="h-2" />
                  <p className="text-sm text-gray-600 mt-2">{statsData.responseRate}% отвечено</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader className="pb-2">
                  <CardDescription>Позитивные</CardDescription>
                  <CardTitle className="text-3xl text-green-600">{statsData.positiveReviews}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{Math.round((statsData.positiveReviews / statsData.totalReviews) * 100)}% от всех</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                <TabsTrigger value="analytics">Аналитика</TabsTrigger>
                <TabsTrigger value="alerts">Алерты</TabsTrigger>
                <TabsTrigger value="reports">Отчёты</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Динамика оценок</CardTitle>
                    <CardDescription>Изменение среднего рейтинга за последние 6 месяцев</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end justify-between gap-4">
                      {[3.8, 4.0, 4.2, 4.3, 4.5, 4.7].map((rating, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-black rounded-t-lg transition-all hover:bg-gray-800"
                            style={{ height: `${(rating / 5) * 100}%` }}
                          />
                          <span className="text-sm font-medium">{rating}</span>
                          <span className="text-xs text-gray-500">Мес {index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle>Распределение отзывов</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Позитивные</span>
                          <span className="text-sm font-medium text-green-600">{statsData.positiveReviews}</span>
                        </div>
                        <Progress value={(statsData.positiveReviews / statsData.totalReviews) * 100} className="h-2 bg-gray-200" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Нейтральные</span>
                          <span className="text-sm font-medium text-gray-600">{statsData.neutralReviews}</span>
                        </div>
                        <Progress value={(statsData.neutralReviews / statsData.totalReviews) * 100} className="h-2 bg-gray-200" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Негативные</span>
                          <span className="text-sm font-medium text-red-600">{statsData.negativeReviews}</span>
                        </div>
                        <Progress value={(statsData.negativeReviews / statsData.totalReviews) * 100} className="h-2 bg-gray-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle>Тренды настроения</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="TrendingUp" size={20} className="text-green-600" />
                          <span className="text-sm font-medium">Позитив растёт</span>
                        </div>
                        <span className="text-sm text-green-600">+18%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="TrendingDown" size={20} className="text-red-600" />
                          <span className="text-sm font-medium">Негатив снижается</span>
                        </div>
                        <span className="text-sm text-red-600">-8%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="MessageSquare" size={20} className="text-blue-600" />
                          <span className="text-sm font-medium">Активность высокая</span>
                        </div>
                        <span className="text-sm text-blue-600">+24%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Последние отзывы</CardTitle>
                    <CardDescription>Мониторинг новых отзывов со всех платформ</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { author: "Анна М.", platform: "Яндекс.Карты", rating: 5, text: "Отличный сервис! Быстро ответили на все вопросы.", time: "2 часа назад", sentiment: "positive" },
                      { author: "Дмитрий К.", platform: "Google", rating: 4, text: "Хорошо, но есть куда расти. В целом доволен.", time: "5 часов назад", sentiment: "neutral" },
                      { author: "Елена С.", platform: "2ГИС", rating: 2, text: "Долго ждал ответа, не устраивает качество.", time: "1 день назад", sentiment: "negative" }
                    ].map((review, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium">{review.author}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{review.platform}</Badge>
                              <span className="text-xs text-gray-500">{review.time}</span>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">⭐</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{review.text}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Icon name="Reply" size={14} className="mr-1" />
                            Ответить
                          </Button>
                          <Button size="sm" variant="outline">
                            <Icon name="Archive" size={14} className="mr-1" />
                            Архив
                          </Button>
                          {review.sentiment === 'negative' && (
                            <Button size="sm" variant="destructive">
                              <Icon name="AlertCircle" size={14} className="mr-1" />
                              Обработать
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Сравнение с конкурентами</CardTitle>
                    <CardDescription>Бенчмарки по средним оценкам в вашей нише</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { name: "Ваша компания", rating: 4.7, reviews: 1247, color: "bg-black" },
                        { name: "Конкурент A", rating: 4.3, reviews: 890, color: "bg-gray-400" },
                        { name: "Конкурент B", rating: 4.5, reviews: 1100, color: "bg-gray-400" },
                        { name: "Средний по нише", rating: 4.2, reviews: 650, color: "bg-gray-300" }
                      ].map((company, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">{company.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm">{company.rating} ⭐</span>
                              <span className="text-xs text-gray-500">{company.reviews} отзывов</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-3">
                            <div 
                              className={`${company.color} h-3 rounded-full transition-all`}
                              style={{ width: `${(company.rating / 5) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Срочные алерты</CardTitle>
                    <CardDescription>Уведомления о негативных отзывах требующих внимания</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { type: "urgent", message: "Новый негативный отзыв на Яндекс.Картах", time: "15 мин назад" },
                      { type: "warning", message: "Рейтинг упал ниже 4.5 на Google", time: "2 часа назад" },
                      { type: "info", message: "Получен отзыв от VIP-клиента", time: "5 часов назад" }
                    ].map((alert, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${
                        alert.type === 'urgent' ? 'bg-red-50 border-red-200' :
                        alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-blue-50 border-blue-200'
                      }`}>
                        <div className="flex items-start gap-3">
                          <Icon 
                            name={alert.type === 'urgent' ? 'AlertCircle' : alert.type === 'warning' ? 'AlertTriangle' : 'Info'} 
                            size={20}
                            className={
                              alert.type === 'urgent' ? 'text-red-600' :
                              alert.type === 'warning' ? 'text-yellow-600' :
                              'text-blue-600'
                            }
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{alert.message}</p>
                            <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                          </div>
                          <Button size="sm" variant="outline">Перейти</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Выгрузка отчётов</CardTitle>
                    <CardDescription>Создайте отчёт для презентаций и анализа</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-24 flex-col">
                        <Icon name="FileText" size={24} className="mb-2" />
                        <span>Скачать PDF</span>
                      </Button>
                      <Button variant="outline" className="h-24 flex-col">
                        <Icon name="Table" size={24} className="mb-2" />
                        <span>Экспорт в Excel</span>
                      </Button>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-3">Последние отчёты</h4>
                      <div className="space-y-2">
                        {["Отчёт за декабрь 2024", "Квартальный анализ Q4", "Годовая статистика"].map((report, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Icon name="FileText" size={20} className="text-gray-600" />
                              <span className="text-sm">{report}</span>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Icon name="Download" size={16} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
