# دستیار صوتی مرکز شماره ۱ جهاد دانشگاهی مشهد

یک وب‌سایت استاتیک فارسی برای معرفی حوزه‌های آموزشی و دسترسی به دستیار صوتی ElevenLabs.

## ساختار پروژه

```text
.
├── index.html
├── assets/
│   ├── images/
│   │   └── jahad-logo.png
│   └── js/
│       └── elevenlabs-widget.js
├── vercel.json
└── README.md
```

## اجرای محلی

به دلیل نیاز میکروفون به یک مبدأ امن، صفحه را از طریق localhost اجرا کنید:

```powershell
npx serve .
```

سپس آدرسی را که در ترمینال نمایش داده می‌شود در مرورگر باز کنید.

## استقرار در Vercel

1. مخزن را در GitHub بارگذاری کنید.
2. در Vercel گزینه **Add New → Project** را انتخاب کنید.
3. مخزن GitHub را Import کنید.
4. Framework Preset را روی **Other** بگذارید.
5. Build Command و Output Directory را خالی بگذارید و Deploy کنید.

پس از استقرار، دامنه Vercel را در تنظیمات دامنه‌های مجاز Agent در ElevenLabs اضافه کنید. Agent باید برای استفاده مستقیم از ویجت عمومی باشد.
