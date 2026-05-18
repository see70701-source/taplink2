import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, Mail, Instagram, Play } from 'lucide-react';

export default function TapLink() {
  const [copied, setCopied] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Отслеживание движения мыши для градиента
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const links = [
    {
      id: 'portfolio',
      title: 'Наше портфолио',
      description: 'Смотри наши лучшие работы',
      url: 'https://portfolio.example.com',
      icon: '🎬',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Behind the scenes и примеры работ',
      url: 'https://instagram.com/example',
      icon: <Instagram size={20} />,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'services',
      title: 'Наши услуги',
      description: 'От концепции до готового видео',
      url: 'https://services.example.com',
      icon: '✨',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'contact',
      title: 'Связаться с нами',
      description: 'Заказать видеопроект',
      url: 'https://contact.example.com',
      icon: <Mail size={20} />,
      color: 'from-violet-500 to-blue-500'
    }
  ];

  const frames = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=400&fit=crop',
      title: 'Коммерческий проект',
      duration: '2:35'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop',
      title: 'Музыкальный клип',
      duration: '3:45'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=500&h=400&fit=crop',
      title: 'Документальный фильм',
      duration: '15:20'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
      title: 'Корпоративное видео',
      duration: '4:10'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1518737261878-08e5379014cb?w=500&h=400&fit=crop',
      title: 'Event coverage',
      duration: '8:55'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d17?w=500&h=400&fit=crop',
      title: 'Реклама',
      duration: '0:30'
    }
  ];

  return (
    <div
      className="min-h-screen bg-black overflow-hidden transition-all duration-300"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 1) 50%)`
      }}
    >
      {/* Шумовый слой */}
      <div className="fixed inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Шапка профиля */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center text-4xl shadow-lg shadow-red-500/50">
              🎥
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            STUDIO NAME
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-md mx-auto">
            Профессиональное видеопроизводство и контент для вашего бренда
          </p>
        </div>

        {/* Сетка ссылок */}
        <div className="w-full max-w-2xl space-y-3">
          {links.map((link, index) => (
            <div
              key={link.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                {/* Фоновый градиент при наведении */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all duration-300 hover:bg-gray-900/80 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        {typeof link.icon === 'string' ? (
                          <span className="text-2xl">{link.icon}</span>
                        ) : (
                          link.icon
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold truncate group-hover:text-gray-100 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-gray-500 text-sm truncate group-hover:text-gray-400 transition-colors">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-400 ml-3 transition-colors" />
                  </div>
                </div>
              </a>

              {/* Кнопка копирования ссылки */}
              <button
                onClick={() => copyToClipboard(link.url, link.id)}
                className="w-full mt-2 text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100"
              >
                {copied === link.id ? (
                  <>
                    <Check size={14} />
                    Скопировано!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Копировать ссылку
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Галерея кадров из видео */}
        <div className="mt-16 w-full">
          <div className="max-w-5xl mx-auto px-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Наши работы
            </h2>
            <p className="text-gray-500">Кадры из последних проектов</p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frames.map((frame, index) => (
                <div
                  key={frame.id}
                  className="group relative overflow-hidden rounded-lg animate-fade-in"
                  style={{ animationDelay: `${500 + index * 50}ms` }}
                >
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    {/* Картинка */}
                    <img
                      src={frame.image}
                      alt={frame.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Оверлей при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <Play className="w-16 h-16 text-white fill-white drop-shadow-lg" />
                      <p className="text-white font-semibold text-center px-4">
                        {frame.title}
                      </p>
                    </div>

                    {/* Длительность видео */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
                      {frame.duration}
                    </div>
                  </div>

                  {/* Подпись под картинкой */}
                  <div className="pt-3 pb-1">
                    <p className="text-white font-medium text-sm group-hover:text-gray-300 transition-colors">
                      {frame.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p>Создано для создателей контента</p>
          <p className="text-xs text-gray-600 mt-1">© 2024 STUDIO NAME</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
