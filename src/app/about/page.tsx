import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/IMG_4762.jpeg" 
            alt="من نحن - بيت التلال للمقاولات" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">من نحن</h1>
          <p className="text-xl max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            تعرف على مؤسسة بيت التلال للمقاولات، الشركة الرائدة في مجال البناء الحديث والمباني الجاهزة في المملكة العربية السعودية
          </p>
        </div>
      </section>
      
      {/* About Company Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6">نبذة عن الشركة</h2>
              <p className="text-lg mb-4">
                مؤسسة بيت التلال للمقاولات هي شركة سعودية متخصصة في مجال البناء الحديث والمباني الجاهزة. تأسست الشركة في عام 2019 على يد مجموعة من المهندسين والخبراء في مجال البناء والتشييد، بهدف تقديم حلول بناء مبتكرة وعالية الجودة تلبي احتياجات السوق السعودي.
              </p>
              <p className="text-lg mb-4">
                منذ تأسيسها، نجحت بيت التلال للمقاولات في تنفيذ العديد من المشاريع المتميزة في مختلف مناطق المملكة، مما أكسبها سمعة طيبة وثقة عملائها. تتميز الشركة بالتزامها بالمواعيد المحددة وجودة التنفيذ والأسعار التنافسية.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4774.jpeg" 
                alt="بيت التلال للمقاولات" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#4CAF50]">رؤيتنا</h2>
              <p className="text-lg">
                أن نكون الشركة الرائدة في مجال البناء الحديث والمباني الجاهزة في المملكة العربية السعودية، من خلال تقديم حلول مبتكرة وعالية الجودة تلبي تطلعات عملائنا وتساهم في تحقيق رؤية المملكة 2030.
              </p>
            </div>
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#2196F3]">رسالتنا</h2>
              <p className="text-lg">
                تقديم خدمات ومنتجات بناء متميزة تجمع بين الجودة العالية والتصميم المبتكر والاستدامة، مع الالتزام بأعلى معايير السلامة والجودة، وتحقيق رضا العملاء من خلال فهم احتياجاتهم وتجاوز توقعاتهم.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { 
                title: 'الجودة', 
                desc: 'الالتزام بأعلى معايير الجودة في جميع مراحل العمل.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'الابتكار', 
                desc: 'السعي المستمر لتطوير حلول وتقنيات جديدة في مجال البناء.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: 'النزاهة', 
                desc: 'العمل بشفافية ومصداقية في جميع تعاملاتنا.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'الالتزام', 
                desc: 'الوفاء بالوعود والمواعيد المحددة لتسليم المشاريع.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'العمل الجماعي', 
                desc: 'تعزيز روح الفريق والتعاون لتحقيق أفضل النتائج.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                title: 'التركيز على العميل', 
                desc: 'وضع احتياجات العميل في مقدمة أولوياتنا.',
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
      
      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">فريقنا</h2>
          <div className="mt-12">
            <p className="text-lg text-center max-w-4xl mx-auto mb-8">
              يضم فريق بيت التلال للمقاولات نخبة من المهندسين والفنيين والعمال المهرة ذوي الخبرة والكفاءة العالية في مجال البناء الحديث. يتميز فريقنا بالاحترافية والتفاني في العمل والقدرة على تنفيذ المشاريع بأعلى مستويات الجودة وفي الوقت المحدد.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/projects/IMG_4775.jpeg" 
                alt="الاستدامة في بيت التلال" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6">التزامنا بالاستدامة</h2>
              <p className="text-lg mb-4">
                في بيت التلال للمقاولات، نؤمن بأهمية الاستدامة في صناعة البناء. نحرص على استخدام مواد صديقة للبيئة وتطبيق تقنيات البناء المستدام التي تساهم في تقليل استهلاك الطاقة والموارد الطبيعية.
              </p>
              <p className="text-lg mb-4">
                كما نلتزم بتطبيق معايير السلامة والصحة المهنية في جميع مشاريعنا، ونسعى دائماً لتقليل الأثر البيئي لعملياتنا.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">إنجازاتنا</h2>
          <div className="mt-12">
            <p className="text-lg text-center max-w-4xl mx-auto mb-8">
              منذ تأسيسها في عام 2019، نجحت بيت التلال للمقاولات في تنفيذ العديد من المشاريع المتميزة في مختلف مناطق المملكة، بما في ذلك:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                'مباني سكنية وتجارية جاهزة',
                'مساجد مسبقة الصنع',
                'هياكل معدنية ومستودعات',
                'مظلات وهياكل مشدودة',
                'وحدات سكنية ومكتبية متنقلة',
                'مشاريع متنوعة أخرى'
              ].map((achievement, index) => (
                <div key={index} className="card p-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white font-bold ml-4">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تريد معرفة المزيد عن خدماتنا؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر لمشروعك.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/services" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-[#4CAF50] text-lg px-8 py-3">
              استكشف خدماتنا
            </a>
            <a href="/contact" className="btn-primary bg-white text-[#4CAF50] hover:bg-opacity-90 text-lg px-8 py-3">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
