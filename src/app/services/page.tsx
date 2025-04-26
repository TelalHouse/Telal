import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/IMG_4760.jpeg" 
            alt="خدماتنا - بيت التلال للمقاولات" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">خدماتنا</h1>
          <p className="text-xl max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            نقدم مجموعة متكاملة من الخدمات في مجال البناء الحديث والمباني الجاهزة بأعلى معايير الجودة
          </p>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="section-title">حلول البناء الحديث</h2>
            <p className="text-lg mt-8">
              في بيت التلال للمقاولات، نقدم مجموعة متنوعة من خدمات البناء الحديث والمباني الجاهزة التي تلبي احتياجات مختلف القطاعات. تتميز خدماتنا بالجودة العالية والتنفيذ السريع والتكلفة المناسبة، مع الالتزام بأعلى معايير السلامة والاستدامة.
            </p>
          </div>
          
          {/* Service 1 */}
          <div id="prefab-buildings" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6 text-[#4CAF50]">المباني الجاهزة والمسبقة الصنع</h2>
              <p className="text-lg mb-4">
                تعد المباني الجاهزة والمسبقة الصنع من أهم الحلول العصرية في مجال البناء الحديث، حيث توفر السرعة في التنفيذ والجودة العالية والتكلفة المناسبة. في بيت التلال للمقاولات، نقدم مجموعة متنوعة من المباني الجاهزة التي تناسب مختلف الاحتياجات والاستخدامات.
              </p>
              <h3 className="text-xl font-bold mb-3">مميزات المباني الجاهزة:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>سرعة التنفيذ والتركيب مقارنة بالبناء التقليدي</li>
                <li>جودة عالية وفق المعايير العالمية</li>
                <li>مرونة في التصميم والتخصيص حسب احتياجات العميل</li>
                <li>مقاومة للعوامل الجوية المختلفة</li>
                <li>عزل حراري وصوتي ممتاز</li>
                <li>سهولة الصيانة والتوسعة المستقبلية</li>
                <li>صديقة للبيئة وموفرة للطاقة</li>
              </ul>
              <h3 className="text-xl font-bold mb-3">أنواع المباني الجاهزة التي نقدمها:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>الفلل السكنية الجاهزة</li>
                <li>المباني التجارية والإدارية</li>
                <li>المدارس والمنشآت التعليمية</li>
                <li>العيادات والمرافق الصحية</li>
                <li>المطاعم والكافيهات</li>
                <li>الاستراحات والشاليهات</li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/services/IMG_4774.jpeg" 
                alt="المباني الجاهزة والمسبقة الصنع" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Service 2 */}
          <div id="prefab-mosques" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/services/IMG_4775.jpeg" 
                alt="المساجد الجاهزة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-[#4CAF50]">المساجد الجاهزة</h2>
              <p className="text-lg mb-4">
                نتخصص في بيت التلال للمقاولات في بناء المساجد الجاهزة بتصاميم تجمع بين الأصالة والحداثة، مع الالتزام بأعلى معايير الجودة والمتانة. تتميز مساجدنا الجاهزة بسرعة التنفيذ والتركيب، مما يساهم في توفير دور العبادة في المناطق المختلفة بوقت قياسي.
              </p>
              <h3 className="text-xl font-bold mb-3">مميزات المساجد الجاهزة:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>تصاميم تراعي الطابع الإسلامي الأصيل</li>
                <li>جودة عالية في التنفيذ والتشطيب</li>
                <li>عزل حراري وصوتي ممتاز</li>
                <li>أنظمة تكييف وإضاءة متطورة</li>
                <li>أنظمة صوتية عالية الجودة</li>
                <li>مرافق متكاملة (دورات مياه، مواضئ، مكتبة)</li>
                <li>سرعة في التنفيذ والتركيب</li>
              </ul>
              <h3 className="text-xl font-bold mb-3">خدماتنا في مجال المساجد الجاهزة:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>تصميم المساجد وفق احتياجات العميل</li>
                <li>توريد وتركيب المساجد الجاهزة</li>
                <li>تجهيز المساجد بالمرافق اللازمة</li>
                <li>الصيانة الدورية والطارئة</li>
              </ul>
            </div>
          </div>
          
          {/* Service 3 */}
          <div id="steel-structures" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6 text-[#4CAF50]">الهياكل المعدنية والإنشاءات الفولاذية</h2>
              <p className="text-lg mb-4">
                نقدم في بيت التلال للمقاولات خدمات متكاملة في مجال الهياكل المعدنية والإنشاءات الفولاذية للمباني التجارية والصناعية والمستودعات. تتميز الهياكل المعدنية بالقوة والمتانة وسرعة التنفيذ والمرونة في التصميم.
              </p>
              <h3 className="text-xl font-bold mb-3">مميزات الهياكل المعدنية:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>قوة ومتانة عالية</li>
                <li>مقاومة للزلازل والعوامل الجوية</li>
                <li>سرعة في التنفيذ والتركيب</li>
                <li>مرونة في التصميم والتعديل</li>
                <li>إمكانية تغطية مساحات كبيرة دون أعمدة وسطية</li>
                <li>تكلفة اقتصادية مقارنة بالخرسانة</li>
                <li>قابلية إعادة التدوير والاستخدام</li>
              </ul>
              <h3 className="text-xl font-bold mb-3">خدماتنا في مجال الهياكل المعدنية:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>تصميم الهياكل المعدنية وفق المعايير العالمية</li>
                <li>تصنيع وتوريد الهياكل المعدنية</li>
                <li>تركيب وتنفيذ المشاريع المعدنية</li>
                <li>الصيانة والتأهيل للمباني المعدنية القائمة</li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/services/IMG_4760.jpeg" 
                alt="الهياكل المعدنية والإنشاءات الفولاذية" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Service 4 */}
          <div id="tensile-structures" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
              <Image 
                src="/images/services/IMG_4758.jpeg" 
                alt="المظلات والهياكل المشدودة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 md:order-2 animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-[#4CAF50]">المظلات والهياكل المشدودة</h2>
              <p className="text-lg mb-4">
                نوفر في بيت التلال للمقاولات حلول المظلات والهياكل المشدودة بتصاميم عصرية ومبتكرة، مناسبة للمواقف والساحات والمناطق الترفيهية. تتميز منتجاتنا بالجودة العالية ومقاومة العوامل الجوية والأشعة فوق البنفسجية.
              </p>
              <h3 className="text-xl font-bold mb-3">مميزات المظلات والهياكل المشدودة:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>تصاميم عصرية وجمالية</li>
                <li>حماية من أشعة الشمس والأمطار</li>
                <li>مقاومة للرياح والعوامل الجوية</li>
                <li>مقاومة للأشعة فوق البنفسجية</li>
                <li>سهولة التركيب والصيانة</li>
                <li>خفة الوزن مقارنة بالحلول التقليدية</li>
                <li>عمر افتراضي طويل</li>
              </ul>
              <h3 className="text-xl font-bold mb-3">أنواع المظلات والهياكل المشدودة:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>مظلات مواقف السيارات</li>
                <li>مظلات الساحات والملاعب</li>
                <li>مظلات الحدائق والمتنزهات</li>
                <li>الهياكل المشدودة للمناطق الترفيهية</li>
                <li>مظلات المداخل والممرات</li>
              </ul>
            </div>
          </div>
          
          {/* Service 5 */}
          <div id="mobile-units" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6 text-[#4CAF50]">الوحدات السكنية والمكتبية المتنقلة</h2>
              <p className="text-lg mb-4">
                نقدم في بيت التلال للمقاولات وحدات سكنية ومكتبية متنقلة عالية الجودة، سهلة التركيب والنقل، مثالية للمواقع المؤقتة ومشاريع الإسكان السريع. تتميز وحداتنا بالمتانة والعزل الجيد والتصميم العملي.
              </p>
              <h3 className="text-xl font-bold mb-3">مميزات الوحدات المتنقلة:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>سهولة النقل والتركيب</li>
                <li>مرونة في الاستخدام والتخصيص</li>
                <li>جودة عالية في التصنيع والتشطيب</li>
                <li>عزل حراري وصوتي جيد</li>
                <li>مقاومة للعوامل الجوية</li>
                <li>تكلفة اقتصادية مقارنة بالبناء التقليدي</li>
                <li>إمكانية إعادة الاستخدام في مواقع مختلفة</li>
              </ul>
              <h3 className="text-xl font-bold mb-3">أنواع الوحدات المتنقلة:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>وحدات سكنية للعمال والموظفين</li>
                <li>مكاتب إدارية متنقلة</li>
                <li>عيادات طبية متنقلة</li>
                <li>فصول دراسية متنقلة</li>
                <li>وحدات خدمية (مطاعم، كافيتريات)</li>
                <li>غرف حراسة وأمن</li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slideInLeft">
              <Image 
                src="/images/services/IMG_4762.jpeg" 
                alt="الوحدات السكنية والمكتبية المتنقلة" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">خدمات إضافية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="h-16 w-16 rounded-full bg-[#4CAF50] flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">التصميم والاستشارات</h3>
              <p className="text-gray-600 text-center">
                نقدم خدمات التصميم والاستشارات الهندسية لمشاريع البناء الحديث، مع مراعاة احتياجات العميل والميزانية المتاحة والمعايير الفنية.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="h-16 w-16 rounded-full bg-[#4CAF50] flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">التوريد والتركيب</h3>
              <p className="text-gray-600 text-center">
                نتولى توريد وتركيب جميع منتجاتنا بواسطة فريق فني متخصص، مع ضمان الجودة والالتزام بالمواعيد المحددة.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="h-16 w-16 rounded-full bg-[#4CAF50] flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">الصيانة والدعم</h3>
              <p className="text-gray-600 text-center">
                نقدم خدمات الصيانة الدورية والطارئة لجميع منتجاتنا، مع توفير قطع الغيار الأصلية وفريق دعم فني على مدار الساعة.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهزون لتنفيذ مشروعك</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            مهما كانت احتياجاتك في مجال البناء الحديث، فريقنا جاهز لتقديم الحلول المناسبة بأعلى معايير الجودة وأفضل الأسعار.
          </p>
          <Link href="/contact" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-[#4CAF50] text-lg px-8 py-3">
            احصل على عرض سعر مجاني
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
