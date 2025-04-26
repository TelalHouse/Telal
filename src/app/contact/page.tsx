import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/IMG_4763.jpeg" 
            alt="اتصل بنا - بيت التلال للمقاولات" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">اتصل بنا</h1>
          <p className="text-xl max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم. تواصلوا معنا اليوم للحصول على استشارة مجانية
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">العنوان</h3>
                    <p className="text-lg text-gray-600">
                      المملكة العربية السعودية
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">أرقام الهاتف</h3>
                    <p className="text-lg text-gray-600 mb-2">
                      الإدارة العامة: [سيتم إضافة الرقم لاحقاً]
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                      خدمة العملاء: [سيتم إضافة الرقم لاحقاً]
                    </p>
                    <p className="text-lg text-gray-600">
                      المبيعات: [سيتم إضافة الرقم لاحقاً]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
                    <p className="text-lg text-gray-600 mb-2">
                      الاستفسارات العامة: info@altelal-house.com
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                      خدمة العملاء: support@altelal-house.com
                    </p>
                    <p className="text-lg text-gray-600">
                      المبيعات: sales@altelal-house.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
                    <p className="text-lg text-gray-600 mb-2">
                      من الأحد إلى الخميس: 8:00 صباحاً - 5:00 مساءً
                    </p>
                    <p className="text-lg text-gray-600">
                      الجمعة والسبت: مغلق
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">تواصل معنا عبر وسائل التواصل الاجتماعي</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6">نموذج الاتصال</h2>
              <p className="text-lg mb-6">
                يمكنك التواصل معنا مباشرة من خلال ملء النموذج التالي، وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">الاسم الكامل*</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent" 
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">رقم الهاتف*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent" 
                      placeholder="أدخل رقم هاتفك"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">البريد الإلكتروني*</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent" 
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-type" className="block text-lg font-medium text-gray-700 mb-2">نوع الاستفسار</label>
                  <select 
                    id="inquiry-type" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                  >
                    <option value="general">استفسار عام</option>
                    <option value="quote">طلب عرض سعر</option>
                    <option value="complaint">شكوى</option>
                    <option value="suggestion">اقتراح</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">الرسالة*</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent" 
                    placeholder="اكتب رسالتك هنا..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full text-center py-4"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">الأسئلة الشائعة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">ما هي مدة تنفيذ المشاريع؟</h3>
              <p className="text-gray-600">
                تختلف مدة التنفيذ حسب حجم وطبيعة المشروع، ولكن بشكل عام تتراوح بين 2-12 أسبوع.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">هل تقدمون خدمات في جميع مناطق المملكة؟</h3>
              <p className="text-gray-600">
                نعم، نقدم خدماتنا في جميع مناطق المملكة العربية السعودية.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">هل تقدمون ضمان على أعمالكم؟</h3>
              <p className="text-gray-600">
                نعم، نقدم ضمان شامل على جميع أعمالنا لمدة تتراوح بين سنة إلى خمس سنوات حسب نوع المشروع.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">هل يمكن تعديل التصاميم حسب رغبة العميل؟</h3>
              <p className="text-gray-600">
                نعم، نحرص على تلبية احتياجات ورغبات عملائنا، ويمكن تعديل التصاميم بما يتناسب مع متطلباتهم.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">كيف يمكنني متابعة تقدم المشروع؟</h3>
              <p className="text-gray-600">
                نوفر لعملائنا تقارير دورية عن سير العمل في المشروع، كما يمكنهم زيارة الموقع بالتنسيق المسبق مع مدير المشروع.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">ما هي طرق الدفع المتاحة؟</h3>
              <p className="text-gray-600">
                نوفر عدة طرق للدفع تشمل التحويل البنكي والدفع الإلكتروني، كما يمكن تقسيط المبلغ على دفعات حسب مراحل المشروع.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Request Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">طلب عرض سعر</h2>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">هل تبحث عن حلول بناء حديثة لمشروعك؟</h3>
              <p className="text-lg text-center mb-8">
                يمكنك طلب عرض سعر مجاني من خلال اتباع الخطوات التالية:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    1
                  </div>
                  <p className="text-lg">
                    املأ نموذج الاتصال وحدد "طلب عرض سعر" في نوع الاستفسار
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    2
                  </div>
                  <p className="text-lg">
                    قدم تفاصيل المشروع (النوع، المساحة، الموقع، المتطلبات الخاصة)
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    3
                  </div>
                  <p className="text-lg">
                    أرفق أي مخططات أو تصاميم إن وجدت
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white ml-4 shrink-0">
                    4
                  </div>
                  <p className="text-lg">
                    سيقوم فريقنا بالتواصل معك خلال 24 ساعة لمناقشة التفاصيل وتقديم عرض السعر
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact-form" className="btn-primary inline-block px-8 py-3">
                  طلب عرض سعر الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
