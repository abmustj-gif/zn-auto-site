import React, { useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Car, ShieldCheck, Truck, Languages, ArrowRight, Instagram, MessageSquareText } from "lucide-react";

const ru = {
  brand: "ZN AUTO",
  tagline: "Покупка и доставка автомобилей из Китая в Душанбе. Помогаем найти, купить и растаможить в Таджикистане.",
  ctaPrimary: "Оставить заявку",
  ctaSecondary: "Позвонить",
  nav: { services: "Услуги", process: "Как мы работаем", guarantees: "Гарантии", contacts: "Контакты" },
  heroBullets: [
    "30% предоплата, 70% — при получении в Душанбе",
    "Подбор, покупка, логистика и растаможка",
    "Собственные трейлеры: 7–15 дней в пути",
  ],
  services: {
    title: "Наши услуги",
    list: [
      { icon: Car, title: "Подбор и покупка", desc: "Находим нужную модель и комплектацию. Проверяем поставщика и документы." },
      { icon: Truck, title: "Доставка до Душанбе", desc: "КНР → граница → таможня → наш трейлер. Один трейлер перевозит 8–11 авто." },
      { icon: ShieldCheck, title: "Растаможка и юр.сопровождение", desc: "Полный пакет документов и прозрачные расчёты." },
    ],
  },
  process: {
    title: "Как мы работаем",
    steps: [
      { step: 1, title: "Заявка", desc: "Вы присылаете модель, бюджет и сроки." },
      { step: 2, title: "Предоплата 30%", desc: "Фиксируем заказ и выкупаем авто." },
      { step: 3, title: "Доставка 7–15 дней", desc: "Перевозим до Душанбе, предоставляем трекинг." },
      { step: 4, title: "70% при получении", desc: "Осмотр, расчёт, передача документов и ключей." },
    ],
  },
  guarantees: {
    title: "Гарантии и прозрачность",
    points: [
      "Доступ к финансовой отчётности",
      "Контроль со стороны инвесторов/доверенных лиц",
      "Независимые аудиты",
      "Инвестиционное соглашение и юр.гарантии",
    ],
  },
  contacts: {
    title: "Контакты",
    address: "Таджикистан, г. Душанбе, ул. Борбад 1",
    phone: "+992 870 00 90 90",
    email: "z.naqliyot@gmail.com",
    wechat: "+992113139907",
    instagram: "Instagram",
    message: "Напишите нам в WhatsApp",
  },
  footer: "© " + new Date().getFullYear() + " ZN AUTO / Zakiya Naqliyot LLC. Все права защищены.",
};

const tg = {
  brand: "ZN AUTO",
  tagline: "Харид ва расонидани автомобилҳо аз Чин то Душанбе. Дар ҷустуҷӯ, харид ва барасмиятдарории гумрукӣ кумак мекунем.",
  ctaPrimary: "Ирсоли дархост",
  ctaSecondary: "Занг задан",
  nav: { services: "Хизматрасониҳо", process: "Чӣ гуна кор мекунем", guarantees: "Кафолатҳо", contacts: "Тамос" },
  heroBullets: [
    "30% пешпардохт, 70% ҳангоми гирифтани мошин дар Душанбе",
    "Интихоб, харид, логистика ва гумрук",
    "Трейлерҳои худӣ: 7–15 рӯз",
  ],
  services: {
    title: "Хизматрасониҳои мо",
    list: [
      { icon: Car, title: "Интихоб ва харид", desc: "Модел ва комплектацияро меёбем, ҳуҷҷатҳоро месанҷем." },
      { icon: Truck, title: "Расонидан ба Душанбе", desc: "Чин → сарҳад → гумрук → трейлери мо. Як трейлер 8–11 авто мебарад." },
      { icon: ShieldCheck, title: "Гумрук ва ҳимояи ҳуқуқӣ", desc: "Ҳуҷҷатҳои пурра ва ҳисобкунии шаффоф." },
    ],
  },
  process: {
    title: "Қадамҳо",
    steps: [
      { step: 1, title: "Дархост", desc: "Модел, буҷет ва мӯҳлатҳоро мефиристед." },
      { step: 2, title: "30% пешпардохт", desc: "Фармоишро тасдиқ мекунем ва мошинро мехарем." },
      { step: 3, title: "7–15 рӯз роҳ", desc: "То Душанбе мерасонем, пайгирӣ дастрас аст." },
      { step: 4, title: "70% ҳангоми гирифтан", desc: "Санҷиш, пардохт ва супоридани ҳуҷҷатҳо." },
    ],
  },
  guarantees: {
    title: "Кафолатҳо ва шаффофият",
    points: [
      "Дастрасӣ ба ҳисоботҳои молиявӣ",
      "Назорати намояндагони сармоягузор",
      "Аудити мустақил",
      "Созишномаи сармоягузорӣ",
    ],
  },
  contacts: {
    title: "Тамос",
    address: "Тоҷикистон, ш. Душанбе, кӯч. Борбад 1",
    phone: "+992 870 00 90 90",
    email: "z.naqliyot@gmail.com",
    wechat: "+992113139907",
    instagram: "Instagram",
    message: "Дар WhatsApp паём фиристед",
  },
  footer: "© " + new Date().getFullYear() + " ZN AUTO / Zakiya Naqliyot LLC.",
};

const zh = {
  brand: "ZN AUTO",
  tagline: "中国至杜尚别的整车采购与运输。一站式选车、购买与清关。",
  ctaPrimary: "提交需求",
  ctaSecondary: "电话联系",
  nav: { services: "服务", process: "流程", guarantees: "保障", contacts: "联系方式" },
  heroBullets: [
    "30%预付款，70%杜尚别交付时支付",
    "选车、采购、物流与清关",
    "自有拖车运输：7–15天到达",
  ],
  services: {
    title: "我们的服务",
    list: [
      { icon: Car, title: "选车与采购", desc: "根据需求匹配车型与配置，核验供应商与文件。" },
      { icon: Truck, title: "运输至杜尚别", desc: "中国→边境→海关→自有拖车。单车队可运8–11台。" },
      { icon: ShieldCheck, title: "清关与法务", desc: "完整单据与透明结算。" },
    ],
  },
  process: {
    title: "合作流程",
    steps: [
      { step: 1, title: "提交需求", desc: "提供车型、预算与时间。" },
      { step: 2, title: "30%预付款", desc: "锁定订单并向供应商采购。" },
      { step: 3, title: "运输7–15天", desc: "运输至杜尚别，可实时追踪。" },
      { step: 4, title: "到货付70%", desc: "验车、结算、交付证件与钥匙。" },
    ],
  },
  guarantees: {
    title: "保障与透明",
    points: [
      "财务数据可查",
      "投资方/受托人监督",
      "第三方审计",
      "法律保障与协议",
    ],
  },
  contacts: {
    title: "联系方式",
    address: "塔吉克斯坦 杜尚别 博尔巴德街1号",
    phone: "+992 870 00 90 90",
    email: "z.naqliyot@gmail.com",
    wechat: "+992113139907",
    instagram: "Instagram",
    message: "通过 WhatsApp 联系我们",
  },
  footer: "© " + new Date().getFullYear() + " ZN AUTO / Zakiya Naqliyot LLC.",
};

const WHATSAPP_NUMBER = "992870009090";
const INSTAGRAM_URL = "https://www.instagram.com/zn__auto/";

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <img
      src="/logo.jpg"
      onError={(e) => {
        const el = e.currentTarget; el.style.display = 'none';
        const fallback = el.nextElementSibling as HTMLDivElement | null; if (fallback) fallback.style.display = 'grid';
      }}
      alt="ZN AUTO"
      className="h-9 w-9 rounded-2xl object-cover shadow-md"
    />
    <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-items-center shadow-md hidden">ZN</div>
    <span className="font-semibold tracking-tight">ZN AUTO</span>
  </div>
);

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 md:px-8 ${className || ""}`}>{children}</section>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm border shadow-sm bg-white/70 backdrop-blur">
    {children}
  </span>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm hover:opacity-80 transition-opacity">
    {children}
  </a>
);

export default function App() {
  const [lang, setLang] = useState<'ru' | 'tg' | 'zh'>('ru');
  const t = useMemo(() => (lang === 'ru' ? ru : lang === 'tg' ? tg : zh), [lang]);

  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const sendWhatsApp = () => {
    const name = nameRef.current?.value?.trim() || '';
    const contact = contactRef.current?.value?.trim() || '';
    const msg = msgRef.current?.value?.trim() || '';
    const langTag = lang === 'ru' ? 'RU' : lang === 'tg' ? 'TJ' : 'ZH';
    const text = `Заявка с сайта (${langTag})\nИмя: ${name}\nКонтакт: ${contact}\nСообщение: ${msg}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <Section className="flex items-center justify-between py-3">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">{t.nav.services}</NavLink>
            <NavLink href="#process">{t.nav.process}</NavLink>
            <NavLink href="#guarantees">{t.nav.guarantees}</NavLink>
            <NavLink href="#contacts">{t.nav.contacts}</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang((p) => (p === 'ru' ? 'tg' : p === 'tg' ? 'zh' : 'ru'))}
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm shadow-sm hover:shadow transition-all"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" /> {lang === 'ru' ? 'TJ' : lang === 'tg' ? '中文' : 'RU'}
            </button>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm shadow hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> {t.ctaSecondary}
            </a>
          </div>
        </Section>
      </header>

      <Section className="pt-10 md:pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold tracking-tight">
              {t.brand}
            </motion.h1>
            <p className="mt-3 md:mt-4 text-lg md:text-xl text-gray-700">{t.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.heroBullets.map((b, i) => (<Pill key={i}>{b}</Pill>))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacts" className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-5 py-3 text-sm md:text-base shadow hover:opacity-90">
                {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm md:text-base shadow-sm hover:shadow">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative h-[260px] md:h-[360px] rounded-3xl bg-gradient-to-br from-gray-200 to-gray-100 shadow-inner overflow-hidden" aria-label="Автомобили и логистика">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3 md:p-4">
              <div className="rounded-2xl bg-white shadow" />
              <div className="rounded-2xl bg-white shadow" />
              <div className="rounded-2xl bg-white shadow" />
              <div className="rounded-2xl bg-white shadow" />
              <div className="rounded-2xl bg-white shadow" />
              <div className="rounded-2xl bg-white shadow" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="h-4 w-4" />
                <span>{lang === 'ru' ? 'Собственный автопарк трейлеров' : lang === 'tg' ? 'Парки трейлерии худӣ' : '自有拖车车队'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="services" className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.services.title}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 md:gap-6">
          {t.services.list.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <s.icon className="h-6 w-6" />
              <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed text-sm md:text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="process" className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.process.title}</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4 md:gap-6">
          {t.process.steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="grid h-7 w-7 place-items-center rounded-full border font-semibold">{s.step}</span>
                <span className="font-medium">{s.title}</span>
              </div>
              <p className="mt-2 text-gray-700 text-sm md:text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="guarantees" className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.guarantees.title}</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4 md:gap-6">
          {t.guarantees.points.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="rounded-3xl border bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <p className="font-medium">{p}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contacts" className="py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.contacts.title}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-3xl border bg-white p-5 md:p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5" />
              <div>
                <div className="font-medium">{t.contacts.address}</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5" />
              <div className="space-y-1">
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="block hover:underline">{t.contacts.phone}</a>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MessageSquareText className="h-4 w-4" /> {t.contacts.message}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5" />
              <a href="mailto:z.naqliyot@gmail.com" className="hover:underline">{t.contacts.email}</a>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-5 md:p-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Instagram className="h-4 w-4" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">{t.contacts.instagram}</a>
              </div>
              <div className="text-sm text-gray-700">
                WeChat: {t.contacts.wechat}
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="rounded-2xl border px-4 py-2 text-sm shadow-sm hover:shadow">WhatsApp</a>
                <a href="https://t.me/" target="_blank" rel="noreferrer" className="rounded-2xl border px-4 py-2 text-sm shadow-sm hover:shadow">Telegram</a>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border bg-white p-5 md:p-6 shadow-sm grid gap-3" onSubmit={(e) => { e.preventDefault(); sendWhatsApp(); }}>
            <div className="grid gap-2">
              <label className="text-sm">{lang === 'ru' ? 'Ваше имя' : lang === 'tg' ? 'Номи шумо' : '您的姓名'}</label>
              <input ref={nameRef} required className="rounded-2xl border px-3 py-2" placeholder={lang === 'ru' ? 'Иван Иванов' : lang === 'tg' ? 'Ном' : '张三'} />
            </div>
            <div className="grid gap-2">
              <label className="text-sm">{lang === 'ru' ? 'Телефон или мессенджер' : lang === 'tg' ? 'Телефон ё паёмрасон' : '电话或消息应用'}</label>
              <input ref={contactRef} required className="rounded-2xl border px-3 py-2" placeholder={lang === 'ru' ? '+992… / WhatsApp' : lang === 'tg' ? '+992… / WhatsApp' : '+992… / 微信/WhatsApp'} />
            </div>
            <div className="grid gap-2">
              <label className="text-sm">{lang === 'ru' ? 'Сообщение' : lang === 'tg' ? 'Паём' : '留言'}</label>
              <textarea ref={msgRef} rows={3} className="rounded-2xl border px-3 py-2" placeholder={lang === 'ru' ? 'Модель, бюджет, сроки…' : lang === 'tg' ? 'Модел, буҷет, мӯҳлат…' : '车型、预算与时间…'} />
            </div>
            <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm shadow hover:opacity-90">
              <ArrowRight className="h-4 w-4" /> {t.ctaPrimary}
            </button>
          </form>
        </div>
      </Section>

      <footer className="mt-12 md:mt-16 border-t">
        <Section className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <Logo />
          <div>{t.footer}</div>
        </Section>
      </footer>
    </div>
  );
}

function Section({ id, className, children }:{ id?: string, className?: string, children: React.ReactNode }){
  return <section id={id} className={`max-w-6xl mx-auto px-4 md:px-8 ${className || ""}`}>{children}</section>
}
