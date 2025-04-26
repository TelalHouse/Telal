import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/IMG_4758.jpeg" 
            alt="مشاريعنا - بيت التلال للمقاولات" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">مشاريعنا</h1>
          <p className="text-xl max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            نفخر بسجل حافل من المشاريع الناجحة في مختلف أنحاء المملكة، من المباني السكنية والتجارية إلى المساجد والمنشآت الصناعية
          </p>
        </div>
      </section>
      
      {/* Projects Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">فئات المشاريع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { 
                title: 'المباني الجاهزة', 
                image: '/images/projects/IMG_4774.jpeg',
                link: '#prefab-buildings'
              },
              { 
                title: 'المساجد الجاهزة', 
                image: '/images/projects/IMG_4775.jpeg',
                link: '#prefab-mosques'
              },
              { 
                title: 'الهياكل المعدنية', 
                image: '/images/projects/IMG_4760.jpeg',
                link: '#steel-structures'
              },
              { 
                title: 'المظلات والهياكل المشدودة', 
                image: '/images/projects/IMG_4758.jpeg',
                link: '#tensile-structures'
              },
              { 
                title: 'الوحدات المتنقلة', 
                image: '/images/projects/IMG_4762.jpeg',
                link: '#mobile-units'
              },
              { 
                title: 'مشاريع أخرى', 
                image: '/images/projects/IMG_4763.jpeg',
                link: '#other-projects'
              },
            ].map((category, index) => (
              <Link href={category.link} key={index} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-xl">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">عرض المشاريع</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Prefab Buildings Projects */}
      <section id="prefab-buildings" className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">مشاريع المباني الجاهزة والمسبقة الصنع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-16">
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع الوحدات السكنية الجاهزة</h3>
              <p className="text-lg mb-6">
                قامت شركة بيت التلال للمقاولات بتنفيذ مشروع وحدات سكنية جاهزة بتصميم عصري يجمع بين الجمال والوظيفة. تميزت هذه الوحدات بجودة التشطيب العالية والعزل الحراري الممتاز والمساحات الداخلية المريحة.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: المنطقة الشرقية</li>
                <li>مساحة المشروع: 500 متر مربع</li>
                <li>مدة التنفيذ: 45 يوم</li>
                <li>سنة الإنجاز: 2023</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4774.jpeg" 
                alt="مشروع الوحدات السكنية الجاهزة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/projects/IMG_4762.jpeg" 
                alt="مشروع المكاتب الإدارية الجاهزة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع المكاتب الإدارية الجاهزة</h3>
              <p className="text-lg mb-6">
                نفذت الشركة مشروع مجمع مكاتب إدارية جاهزة لإحدى الشركات، حيث تم تصميم وتنفيذ المكاتب وفق أحدث المعايير العالمية، مع مراعاة متطلبات العميل من حيث المساحات وتوزيع الفراغات والتشطيبات.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: الرياض</li>
                <li>مساحة المشروع: 800 متر مربع</li>
                <li>مدة التنفيذ: 60 يوم</li>
                <li>سنة الإنجاز: 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Prefab Mosques Projects */}
      <section id="prefab-mosques" className="section">
        <div className="container">
          <h2 className="section-title">مشاريع المساجد الجاهزة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-16">
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع مسجد النور الجاهز</h3>
              <p className="text-lg mb-6">
                قامت شركة بيت التلال للمقاولات بتصميم وتنفيذ مسجد النور الجاهز بمساحة 200 متر مربع، يتسع لـ 150 مصلي. تميز المسجد بتصميمه الذي يجمع بين الطابع الإسلامي الأصيل والتقنيات الحديثة، مع توفير جميع المرافق اللازمة من مواضئ ودورات مياه.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: المدينة المنورة</li>
                <li>مساحة المشروع: 200 متر مربع</li>
                <li>مدة التنفيذ: 90 يوم</li>
                <li>سنة الإنجاز: 2023</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4775.jpeg" 
                alt="مشروع مسجد النور الجاهز" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/projects/IMG_4775.jpeg" 
                alt="مشروع مساجد الطرق السريعة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع مساجد الطرق السريعة</h3>
              <p className="text-lg mb-6">
                نفذت الشركة مشروع مساجد جاهزة على الطرق السريعة، حيث تم تصميم وتنفيذ نموذج موحد للمساجد يتميز بسهولة التركيب والنقل، مع مراعاة توفير جميع الخدمات الأساسية للمصلين.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: طريق الرياض - مكة</li>
                <li>عدد المساجد: 5 مساجد</li>
                <li>مدة التنفيذ: 120 يوم</li>
                <li>سنة الإنجاز: 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steel Structures Projects */}
      <section id="steel-structures" className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">مشاريع الهياكل المعدنية والإنشاءات الفولاذية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-16">
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع مستودعات التخزين</h3>
              <p className="text-lg mb-6">
                قامت شركة بيت التلال للمقاولات بتنفيذ مشروع مستودعات تخزين بهياكل معدنية بمساحة إجمالية 5000 متر مربع. تميز المشروع بالمتانة وسرعة التنفيذ والمرونة في التصميم، مع توفير مساحات تخزين كبيرة دون أعمدة وسطية.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: جدة</li>
                <li>مساحة المشروع: 5000 متر مربع</li>
                <li>مدة التنفيذ: 120 يوم</li>
                <li>سنة الإنجاز: 2023</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4760.jpeg" 
                alt="مشروع مستودعات التخزين" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/projects/IMG_4760.jpeg" 
                alt="مشروع الصالات الرياضية" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع الصالات الرياضية</h3>
              <p className="text-lg mb-6">
                نفذت الشركة مشروع صالات رياضية بهياكل معدنية لإحدى الجامعات، حيث تم تصميم وتنفيذ الصالات وفق المعايير العالمية للمنشآت الرياضية، مع مراعاة متطلبات السلامة والمتانة.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: الرياض</li>
                <li>مساحة المشروع: 3000 متر مربع</li>
                <li>مدة التنفيذ: 150 يوم</li>
                <li>سنة الإنجاز: 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tensile Structures Projects */}
      <section id="tensile-structures" className="section">
        <div className="container">
          <h2 className="section-title">مشاريع المظلات والهياكل المشدودة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-16">
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع مظلات مواقف السيارات</h3>
              <p className="text-lg mb-6">
                قامت شركة بيت التلال للمقاولات بتنفيذ مشروع مظلات لمواقف السيارات بأحد المجمعات التجارية، حيث تم تصميم وتنفيذ المظلات بشكل يوفر الحماية من أشعة الشمس والأمطار، مع مراعاة الناحية الجمالية.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: الدمام</li>
                <li>مساحة المشروع: 2000 متر مربع</li>
                <li>مدة التنفيذ: 45 يوم</li>
                <li>سنة الإنجاز: 2023</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4758.jpeg" 
                alt="مشروع مظلات مواقف السيارات" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/projects/IMG_4758.jpeg" 
                alt="مشروع مظلات الساحات والملاعب" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع مظلات الساحات والملاعب</h3>
              <p className="text-lg mb-6">
                نفذت الشركة مشروع مظلات للساحات والملاعب بإحدى المدارس، حيث تم تصميم وتنفيذ المظلات بشكل يوفر التغطية الكاملة للساحات والملاعب، مع استخدام مواد عالية الجودة مقاومة للعوامل الجوية والأشعة فوق البنفسجية.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: جدة</li>
                <li>مساحة المشروع: 1500 متر مربع</li>
                <li>مدة التنفيذ: 30 يوم</li>
                <li>سنة الإنجاز: 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Units Projects */}
      <section id="mobile-units" className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">مشاريع الوحدات السكنية والمكتبية المتنقلة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 mb-16">
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع وحدات سكنية للعمال</h3>
              <p className="text-lg mb-6">
                قامت شركة بيت التلال للمقاولات بتنفيذ مشروع وحدات سكنية متنقلة لعمال إحدى الشركات، حيث تم تصميم وتنفيذ الوحدات بشكل يوفر بيئة سكنية مريحة وآمنة، مع مراعاة سهولة النقل والتركيب.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: الرياض</li>
                <li>عدد الوحدات: 50 وحدة</li>
                <li>مدة التنفيذ: 60 يوم</li>
                <li>سنة الإنجاز: 2023</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/projects/IMG_4762.jpeg" 
                alt="مشروع وحدات سكنية للعمال" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/projects/IMG_4763.jpeg" 
                alt="مشروع مكاتب إدارية متنقلة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">مشروع مكاتب إدارية متنقلة</h3>
              <p className="text-lg mb-6">
                نفذت الشركة مشروع مكاتب إدارية متنقلة لإحدى المواقع الإنشائية، حيث تم تصميم وتنفيذ المكاتب بشكل يلبي احتياجات العمل الإداري، مع توفير جميع الخدمات الأساسية من كهرباء وتكييف وشبكات اتصال.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>موقع المشروع: جدة</li>
                <li>عدد الوحدات: 20 وحدة</li>
                <li>مدة التنفيذ: 45 يوم</li>
                <li>سنة الإنجاز: 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Projects */}
      <section id="other-projects" className="section">
        <div className="container">
          <h2 className="section-title">مشاريع أخرى</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/projects/IMG_4763.jpeg" 
                  alt="مشروع العيادات الطبية المتنقلة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">مشروع العيادات الطبية المتنقلة</h3>
                <p className="text-gray-600 mb-4">
                  قامت شركة بيت التلال للمقاولات بتنفيذ مشروع عيادات طبية متنقلة لإحدى الجهات الصحية، حيث تم تصميم وتنفيذ العيادات وفق المعايير الصحية العالمية.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>الرياض</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/projects/IMG_4762.jpeg" 
                  alt="مشروع الفصول الدراسية الجاهزة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">مشروع الفصول الدراسية الجاهزة</h3>
                <p className="text-gray-600 mb-4">
                  نفذت الشركة مشروع فصول دراسية جاهزة لإحدى المدارس، حيث تم تصميم وتنفيذ الفصول بشكل يوفر بيئة تعليمية مناسبة.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>جدة</span>
                  <span>2022</span>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/projects/IMG_4761.jpeg" 
                  alt="مشروع المطاعم المتنقلة" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">مشروع المطاعم المتنقلة</h3>
                <p className="text-gray-600 mb-4">
                  قامت الشركة بتنفيذ مشروع مطاعم متنقلة لإحدى الفعاليات، حيث تم تصميم وتنفيذ المطاعم بشكل يلبي متطلبات الخدمات الغذائية.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>الدمام</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل لديك مشروع مماثل؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            فريقنا جاهز لتنفيذ مشروعك بأعلى معايير الجودة وأفضل الأسعار. تواصل معنا اليوم للحصول على استشارة مجانية.
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
