import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/IMG_4774.jpeg" 
            alt="بيت التلال للمقاولات" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">بيت التلال للمقاولات</h1>
            <p className="text-xl md:text-2xl mb-8">متخصصون في البناء الحديث منذ 2019</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">تواصل معنا</Link>
              <Link href="/services" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-[#4CAF50]">خدماتنا</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">نبذة عنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div className="animate-slideInRight">
              <p className="text-lg mb-6">
                مؤسسة بيت التلال للمقاولات هي شركة رائدة في مجال البناء الحديث والمباني الجاهزة في المملكة العربية السعودية. منذ تأسيسنا في عام 2019، نقدم حلولاً مبتكرة وعالية الجودة تلبي احتياجات عملائنا في مختلف القطاعات.
              </p>
              <p className="text-lg mb-6">
                نحن نجمع بين التقنيات الحديثة والخبرة المهنية لتقديم مشاريع متميزة تتسم بالجودة والاستدامة والكفاءة.
              </p>
              <Link href="/about" className="btn-primary inline-block">المزيد عنا</Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4762.jpeg" 
                alt="مشاريع بيت التلال" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/images/services/IMG_4774.jpeg" 
                  alt="المباني الجاهزة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">المباني الجاهزة والمسبقة الصنع</h3>
              <p className="text-gray-600 mb-4">
                نقدم حلول المباني الجاهزة عالية الجودة التي تجمع بين السرعة في التنفيذ والمتانة والتصميم العصري.
              </p>
              <Link href="/services" className="text-[#4CAF50] font-medium hover:underline">اقرأ المزيد</Link>
            </div>
            
            <div className="card p-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/images/services/IMG_4775.jpeg" 
                  alt="المساجد الجاهزة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">المساجد الجاهزة</h3>
              <p className="text-gray-600 mb-4">
                نتخصص في بناء المساجد الجاهزة بتصاميم تجمع بين الأصالة والحداثة، مع الالتزام بأعلى معايير الجودة والمتانة.
              </p>
              <Link href="/services" className="text-[#4CAF50] font-medium hover:underline">اقرأ المزيد</Link>
            </div>
            
            <div className="card p-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/images/services/IMG_4760.jpeg" 
                  alt="الهياكل المعدنية" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">الهياكل المعدنية والإنشاءات الفولاذية</h3>
              <p className="text-gray-600 mb-4">
                نقوم بتصميم وتنفيذ الهياكل المعدنية والإنشاءات الفولاذية للمباني التجارية والصناعية والمستودعات.
              </p>
              <Link href="/services" className="text-[#4CAF50] font-medium hover:underline">اقرأ المزيد</Link>
            </div>
            
            <div className="card p-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/images/services/IMG_4758.jpeg" 
                  alt="المظلات والهياكل المشدودة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">المظلات والهياكل المشدودة</h3>
              <p className="text-gray-600 mb-4">
                نوفر حلول المظلات والهياكل المشدودة بتصاميم عصرية ومبتكرة، مناسبة للمواقف والساحات والمناطق الترفيهية.
              </p>
              <Link href="/services" className="text-[#4CAF50] font-medium hover:underline">اقرأ المزيد</Link>
            </div>
            
            <div className="card p-6 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/images/services/IMG_4762.jpeg" 
                  alt="الوحدات السكنية المتنقلة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">الوحدات السكنية والمكتبية المتنقلة</h3>
              <p className="text-gray-600 mb-4">
                نقدم وحدات سكنية ومكتبية متنقلة عالية الجودة، سهلة التركيب والنقل، مثالية للمواقع المؤقتة.
              </p>
              <Link href="/services" className="text-[#4CAF50] font-medium hover:underline">اقرأ المزيد</Link>
            </div>
            
            <div className="card p-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="h-48 relative mb-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#4CAF50] to-[#2196F3] flex items-center justify-center">
                <span className="text-white text-2xl font-bold">المزيد من الخدمات</span>
              </div>
              <h3 className="text-xl font-bold mb-3">خدمات أخرى</h3>
              <p className="text-gray-600 mb-4">
                نقدم العديد من الخدمات الأخرى في مجال البناء الحديث والمقاولات. تواصل معنا لمعرفة المزيد.
              </p>
              <Link href="/services" className="text-[#4CAF50] font-medium hover:underline">اقرأ المزيد</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">مشاريعنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { img: 'IMG_4774.jpeg', title: 'مشروع الوحدات السكنية الجاهزة' },
              { img: 'IMG_4775.jpeg', title: 'مشروع مسجد النور الجاهز' },
              { img: 'IMG_4760.jpeg', title: 'مشروع الهياكل المعدنية' },
              { img: 'IMG_4758.jpeg', title: 'مشروع المظلات' },
              { img: 'IMG_4762.jpeg', title: 'مشروع الوحدات المتنقلة' },
              { img: 'IMG_4763.jpeg', title: 'مشروع المكاتب الإدارية' },
            ].map((project, index) => (
              <div key={index} className="group relative h-64 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                <Image 
                  src={`/images/projects/${project.img}`} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <Link href="/projects" className="text-sm text-white hover:text-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="btn-primary">عرض جميع المشاريع</Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">لماذا تختار بيت التلال للمقاولات؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { 
                title: 'الجودة العالية', 
                desc: 'نلتزم بأعلى معايير الجودة في جميع مراحل المشروع، من التصميم إلى التنفيذ والتسليم.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'السرعة في التنفيذ', 
                desc: 'تتميز حلولنا بسرعة التنفيذ مقارنة بالبناء التقليدي، مما يوفر الوقت والتكلفة لعملائنا.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'التصاميم المبتكرة', 
                desc: 'نقدم تصاميم عصرية ومبتكرة تلبي احتياجات عملائنا وتتماشى مع أحدث اتجاهات البناء الحديث.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: 'الاستدامة', 
                desc: 'نراعي معايير الاستدامة والكفاءة في استهلاك الطاقة في جميع مشاريعنا.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'فريق محترف', 
                desc: 'يضم فريقنا نخبة من المهندسين والفنيين ذوي الخبرة والكفاءة العالية.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                title: 'خدمة عملاء متميزة', 
                desc: 'نقدم خدمة عملاء متميزة قبل وأثناء وبعد تنفيذ المشروع، ونضمن رضا عملائنا.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                )
              },
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر لمشروعك.
          </p>
          <Link href="/contact" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-[#4CAF50] text-lg px-8 py-3">
            تواصل معنا الآن
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
