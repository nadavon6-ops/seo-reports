import styles from './styles.module.css'

export const metadata = {
  title: 'Schema & Local SEO Strategy - Talent Solutions',
  description: 'אסטרטגיית Schema ו-Local SEO לעמודי השירות',
}

export default function SchemaStrategyReport() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1>אסטרטגיית Schema & Local SEO</h1>
        <p className={styles.subtitle}>talentsolutions.manpowergroup.co.il</p>
        <span className={styles.date}>15 עמודי שירות | מבוסס על נתוני GSC</span>
      </div>

      <div className={styles.container}>
        {/* Strategy Overview */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.purple}`}>🎯</div>
            <h2 className={styles.cardTitle}>אסטרטגיית Schema - סקירה כללית</h2>
          </div>

          <div className={styles.summaryBox}>
            <h4>עקרונות מפתח למניעת קניבליזם</h4>
            <ul className={styles.principlesList}>
              <li><strong>כל עמוד = שירות ייחודי</strong> - מילות מפתח ראשיות שונות לכל עמוד</li>
              <li><strong>היררכיית שירותים</strong> - Organization → Service → LocalBusiness</li>
              <li><strong>GEO Targeting</strong> - כל עמוד מכוון לאזור/קהל יעד שונה</li>
              <li><strong>FAQ ייחודי</strong> - שאלות נפוצות שונות לכל שירות</li>
            </ul>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>15</div>
              <div className={styles.statLabel}>עמודי שירות</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>8</div>
              <div className={styles.statLabel}>סוגי Schema</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>45+</div>
              <div className={styles.statLabel}>מילות מפתח יעד</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>3</div>
              <div className={styles.statLabel}>אזורים גיאוגרפיים</div>
            </div>
          </div>
        </div>

        {/* Schema Types Overview */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.blue}`}>📋</div>
            <h2 className={styles.cardTitle}>סוגי Schema לשימוש</h2>
          </div>

          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>סוג Schema</th>
                <th>עמודים</th>
                <th>תועלת SEO</th>
                <th>Rich Snippets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Organization</code></td>
                <td>כל העמודים</td>
                <td>Knowledge Panel</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
              <tr>
                <td><code>Service</code></td>
                <td>כל עמודי השירות</td>
                <td>Rich Results לשירותים</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
              <tr>
                <td><code>LocalBusiness</code></td>
                <td>עמודים עם מיקוד גיאוגרפי</td>
                <td>Local Pack</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
              <tr>
                <td><code>FAQPage</code></td>
                <td>עמודים עם שאלות נפוצות</td>
                <td>FAQ Rich Snippets</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
              <tr>
                <td><code>HowTo</code></td>
                <td>תהליכי עבודה</td>
                <td>How-To Snippets</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
              <tr>
                <td><code>BreadcrumbList</code></td>
                <td>כל העמודים</td>
                <td>ניווט משופר</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
              <tr>
                <td><code>Review/AggregateRating</code></td>
                <td>עמודים עם המלצות</td>
                <td>כוכבים בתוצאות</td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>בתנאים</span></td>
              </tr>
              <tr>
                <td><code>JobPosting</code></td>
                <td>עמודי גיוס</td>
                <td>Google for Jobs</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Page 1: RPO */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>1️⃣</div>
            <h2 className={styles.cardTitle}>RPO - גיוס במיקור חוץ</h2>
          </div>

          <div className={styles.pageInfo}>
            <span className={styles.pageUrl}>/rpo/</span>
            <div className={styles.pageMetrics}>
              <span>10,768 חשיפות</span>
              <span>42 קליקים</span>
              <span>פוז׳ 24.8</span>
            </div>
          </div>

          <div className={styles.keywordStrategy}>
            <h4>מילות מפתח ראשיות (ללא קניבליזם)</h4>
            <div className={styles.keywordsFlex}>
              <span className={`${styles.keywordTag} ${styles.primary}`}>RPO</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>גיוס במיקור חוץ</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>מיקור חוץ גיוס</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>שירותי RPO</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>recruitment process outsourcing</span>
            </div>
            <p className={styles.note}>❌ לא להשתמש: &quot;גיוס עובדים&quot; (שייך לעמוד גיוס מקצה לקצה)</p>
          </div>

          <div className={styles.schemaSection}>
            <h4>Schema מומלץ</h4>
            <div className={styles.codeBlock}>
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Recruitment Process Outsourcing (RPO)",
  "name": "RPO - גיוס במיקור חוץ",
  "description": "שירותי RPO מקצועיים - ניהול תהליך הגיוס במלואו",
  "provider": {
    "@type": "Organization",
    "name": "Talent Solutions Israel",
    "url": "https://talentsolutions.manpowergroup.co.il"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "שירותי RPO",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "ניהול גיוס מקצה לקצה"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "רכזות גיוס במיקור חוץ"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "תגבור צוותי גיוס"}}
    ]
  }
}`}
            </div>
          </div>

          <div className={styles.faqSchema}>
            <h4>FAQ Schema (ייחודי לעמוד)</h4>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <strong>Q: מה זה RPO ואיך זה עובד?</strong>
                <p>A: RPO (Recruitment Process Outsourcing) הוא שירות מיקור חוץ לניהול תהליכי גיוס...</p>
              </div>
              <div className={styles.faqItem}>
                <strong>Q: מה ההבדל בין RPO לחברת השמה?</strong>
                <p>A: בעוד חברת השמה מספקת מועמדים, RPO מנהל את כל תהליך הגיוס...</p>
              </div>
              <div className={styles.faqItem}>
                <strong>Q: כמה עולה שירות RPO?</strong>
                <p>A: עלות שירות RPO משתנה לפי היקף הגיוס ורמת השירות הנדרשת...</p>
              </div>
            </div>
          </div>

          <div className={styles.geoTarget}>
            <h4>🎯 GEO Targeting</h4>
            <p><strong>אזור יעד:</strong> מרכז ישראל (תל אביב, רמת גן, הרצליה)</p>
            <p><strong>קהל יעד:</strong> מנהלי HR בחברות גדולות, סטארטאפים בצמיחה</p>
          </div>
        </div>

        {/* Page 2: סורסינג */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>2️⃣</div>
            <h2 className={styles.cardTitle}>סורסינג</h2>
          </div>

          <div className={styles.pageInfo}>
            <span className={styles.pageUrl}>/סורסינג/</span>
            <div className={styles.pageMetrics}>
              <span>3,410 חשיפות</span>
              <span>29 קליקים</span>
              <span>פוז׳ 12.9</span>
            </div>
          </div>

          <div className={styles.keywordStrategy}>
            <h4>מילות מפתח ראשיות (ללא קניבליזם)</h4>
            <div className={styles.keywordsFlex}>
              <span className={`${styles.keywordTag} ${styles.primary}`}>סורסינג</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>מה זה סורסינג</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>sourcing</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>איתור מועמדים</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>סורסר גיוס</span>
            </div>
            <p className={styles.note}>❌ לא להשתמש: &quot;גיוס טאלנטים&quot; (שייך לעמוד ייעוץ ארגוני)</p>
          </div>

          <div className={styles.schemaSection}>
            <h4>Schema מומלץ</h4>
            <div className={styles.codeBlock}>
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Talent Sourcing",
  "name": "סורסינג - איתור מועמדים",
  "description": "שירותי סורסינג מקצועיים לאיתור הטאלנטים הטובים ביותר",
  "provider": {
    "@type": "Organization",
    "name": "Talent Solutions Israel"
  },
  "areaServed": "IL"
}`}
            </div>
          </div>

          <div className={styles.faqSchema}>
            <h4>FAQ Schema (ייחודי לעמוד)</h4>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <strong>Q: מה זה סורסינג?</strong>
                <p>A: סורסינג הוא תהליך איתור ומיפוי מועמדים פוטנציאליים...</p>
              </div>
              <div className={styles.faqItem}>
                <strong>Q: מה ההבדל בין סורסר לרכז גיוס?</strong>
                <p>A: סורסר מתמקד באיתור מועמדים, רכז גיוס מנהל את כל התהליך...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3: תוכניות פיתוח מנהלים */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>3️⃣</div>
            <h2 className={styles.cardTitle}>תוכניות פיתוח מנהלים</h2>
          </div>

          <div className={styles.pageInfo}>
            <span className={styles.pageUrl}>/תוכניות-פיתוח-מנהלים/</span>
            <div className={styles.pageMetrics}>
              <span>3,097 חשיפות</span>
              <span>5 קליקים</span>
              <span>פוז׳ 55.1</span>
            </div>
          </div>

          <div className={styles.keywordStrategy}>
            <h4>מילות מפתח ראשיות (ללא קניבליזם)</h4>
            <div className={styles.keywordsFlex}>
              <span className={`${styles.keywordTag} ${styles.primary}`}>פיתוח מנהלים</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>תוכנית פיתוח מנהלים</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>פיתוח מנהלים בארגון</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>קורס פיתוח מנהלים</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>הכשרת מנהלים</span>
            </div>
            <p className={styles.note}>❌ לא להשתמש: &quot;הדרכות לעובדים&quot;, &quot;פיתוח ארגוני&quot; (עמודים נפרדים)</p>
          </div>

          <div className={styles.schemaSection}>
            <h4>Schema מומלץ</h4>
            <div className={styles.codeBlock}>
{`{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "תוכנית פיתוח מנהלים",
  "description": "תוכניות פיתוח מנהלים מותאמות אישית לארגונים",
  "provider": {
    "@type": "Organization",
    "name": "Talent Solutions Israel"
  },
  "coursePrerequisites": "מנהלים ומובילים בארגון",
  "educationalLevel": "Professional Development",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "address": "Israel"
    }
  }
}`}
            </div>
          </div>

          <div className={styles.faqSchema}>
            <h4>FAQ Schema (ייחודי לעמוד)</h4>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <strong>Q: מה כוללת תוכנית פיתוח מנהלים?</strong>
                <p>A: תוכנית פיתוח מנהלים כוללת סדנאות מעשיות, ליווי אישי, כלים ניהוליים...</p>
              </div>
              <div className={styles.faqItem}>
                <strong>Q: כמה זמן לוקחת תוכנית פיתוח מנהלים?</strong>
                <p>A: משך התוכנית משתנה בין 3-12 חודשים בהתאם לצרכים...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: Outplacement */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>4️⃣</div>
            <h2 className={styles.cardTitle}>Outplacement - ליווי בסיום העסקה</h2>
          </div>

          <div className={styles.pageInfo}>
            <span className={styles.pageUrl}>/ליווי-תהליך-סיום-העסקה.../</span>
            <div className={styles.pageMetrics}>
              <span>1,549 חשיפות</span>
              <span>19 קליקים</span>
              <span>פוז׳ 39.5</span>
            </div>
          </div>

          <div className={styles.keywordStrategy}>
            <h4>מילות מפתח ראשיות (ללא קניבליזם)</h4>
            <div className={styles.keywordsFlex}>
              <span className={`${styles.keywordTag} ${styles.primary}`}>אאוטפלייסמנט</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>outplacement</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>ליווי מפוטרים</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>ליווי פורשים</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>סיום העסקה</span>
            </div>
            <p className={styles.note}>❌ לא להשתמש: &quot;ליווי פרישה&quot; (עמוד נפרד)</p>
          </div>

          <div className={styles.schemaSection}>
            <h4>Schema מומלץ</h4>
            <div className={styles.codeBlock}>
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Outplacement Services",
  "name": "Outplacement - ליווי בסיום העסקה",
  "description": "שירותי אאוטפלייסמנט לליווי עובדים בתהליכי סיום העסקה",
  "provider": {
    "@type": "Organization",
    "name": "Talent Solutions Israel"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Employees and Organizations"
  }
}`}
            </div>
          </div>
        </div>

        {/* Page 5: הדרכות */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>5️⃣</div>
            <h2 className={styles.cardTitle}>הדרכות וסדנאות</h2>
          </div>

          <div className={styles.pageInfo}>
            <span className={styles.pageUrl}>/הרצאות-הדרכות-וסדנאות.../</span>
            <div className={styles.pageMetrics}>
              <span>1,563 חשיפות</span>
              <span>7 קליקים</span>
              <span>פוז׳ 59.1</span>
            </div>
          </div>

          <div className={styles.keywordStrategy}>
            <h4>מילות מפתח ראשיות (ללא קניבליזם)</h4>
            <div className={styles.keywordsFlex}>
              <span className={`${styles.keywordTag} ${styles.primary}`}>הרצאות העשרה לעובדים</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>הדרכות לעובדים</span>
              <span className={`${styles.keywordTag} ${styles.primary}`}>סדנאות לארגונים</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>הרצאות לעובדים</span>
              <span className={`${styles.keywordTag} ${styles.secondary}`}>הדרכות לארגונים</span>
            </div>
            <p className={styles.note}>❌ לא להשתמש: &quot;פיתוח מנהלים&quot; (עמוד נפרד)</p>
          </div>

          <div className={styles.schemaSection}>
            <h4>Schema מומלץ</h4>
            <div className={styles.codeBlock}>
{`{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Talent Solutions - הדרכות וסדנאות",
  "description": "הרצאות, הדרכות וסדנאות מקצועיות לצוותי HR וגיוס",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "קטלוג הדרכות",
    "itemListElement": [
      {"@type": "Course", "name": "הרצאות העשרה לעובדים"},
      {"@type": "Course", "name": "סדנאות גיוס מקצועיות"},
      {"@type": "Course", "name": "הדרכות HR"}
    ]
  }
}`}
            </div>
          </div>
        </div>

        {/* Cannibalization Prevention Matrix */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.red}`}>⚠️</div>
            <h2 className={styles.cardTitle}>מטריצת מניעת קניבליזם</h2>
          </div>

          <p className={styles.note}>הטבלה הבאה מגדירה אילו מילות מפתח שייכות לכל עמוד - מונעת תחרות פנימית</p>

          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>עמוד</th>
                <th>מילות מפתח בלעדיות</th>
                <th>לא להשתמש</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>/rpo/</strong></td>
                <td>RPO, גיוס במיקור חוץ, רכזת גיוס במיקור חוץ</td>
                <td className={styles.danger}>גיוס עובדים, תגבור גיוס</td>
              </tr>
              <tr>
                <td><strong>/סורסינג/</strong></td>
                <td>סורסינג, מה זה סורסינג, איתור מועמדים</td>
                <td className={styles.danger}>גיוס טאלנטים</td>
              </tr>
              <tr>
                <td><strong>/גיוס-מקצה-לקצה/</strong></td>
                <td>גיוס עובדים, תהליך גיוס, שירותי גיוס</td>
                <td className={styles.danger}>RPO, סורסינג</td>
              </tr>
              <tr>
                <td><strong>/תוכניות-פיתוח-מנהלים/</strong></td>
                <td>פיתוח מנהלים, קורס מנהלים, הכשרת מנהלים</td>
                <td className={styles.danger}>הדרכות לעובדים, פיתוח ארגוני</td>
              </tr>
              <tr>
                <td><strong>/ייעוץ-ארגוני.../</strong></td>
                <td>ייעוץ ארגוני, ייעוץ HR, גיוס טאלנטים</td>
                <td className={styles.danger}>פיתוח מנהלים</td>
              </tr>
              <tr>
                <td><strong>/outplacement/</strong></td>
                <td>אאוטפלייסמנט, ליווי מפוטרים, סיום העסקה</td>
                <td className={styles.danger}>ליווי פרישה</td>
              </tr>
              <tr>
                <td><strong>/הדרכות.../</strong></td>
                <td>הרצאות לעובדים, הדרכות לעובדים, סדנאות</td>
                <td className={styles.danger}>פיתוח מנהלים</td>
              </tr>
              <tr>
                <td><strong>/עובדים-זמניים.../</strong></td>
                <td>עובדים זמניים, מיקור חוץ עובדים</td>
                <td className={styles.danger}>RPO</td>
              </tr>
              <tr>
                <td><strong>/תפעול-גיוס/</strong></td>
                <td>תפעול גיוס, ניהול גיוס, תשתיות גיוס</td>
                <td className={styles.danger}>RPO, גיוס מקצה לקצה</td>
              </tr>
              <tr>
                <td><strong>/פיתוח-ארגוני.../</strong></td>
                <td>פיתוח ארגוני, פיתוח צוותים</td>
                <td className={styles.danger}>פיתוח מנהלים</td>
              </tr>
              <tr>
                <td><strong>/ליווי-פרישה.../</strong></td>
                <td>ליווי פרישה, תכנון פרישה, פנסיה</td>
                <td className={styles.danger}>אאוטפלייסמנט</td>
              </tr>
              <tr>
                <td><strong>/שימור-עובדים.../</strong></td>
                <td>שימור עובדים, שימור טאלנטים</td>
                <td className={styles.danger}>גיוס</td>
              </tr>
              <tr>
                <td><strong>/גיוס-לפרויקטים.../</strong></td>
                <td>גיוס לפרויקטים, גיוס זמני</td>
                <td className={styles.danger}>RPO, גיוס מקצה לקצה</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Local SEO Strategy */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.yellow}`}>📍</div>
            <h2 className={styles.cardTitle}>אסטרטגיית Local SEO</h2>
          </div>

          <div className={styles.localSeoGrid}>
            <div className={styles.localCard}>
              <h4>🏢 Google Business Profile</h4>
              <ul>
                <li>וודא פרופיל מאומת ומעודכן</li>
                <li>הוסף את כל השירותים כקטגוריות</li>
                <li>פרסם עדכונים שבועיים</li>
                <li>השב לכל הביקורות</li>
                <li>הוסף תמונות איכותיות</li>
              </ul>
            </div>

            <div className={styles.localCard}>
              <h4>🗺️ GEO Keywords</h4>
              <div className={styles.geoKeywords}>
                <span>RPO תל אביב</span>
                <span>גיוס במיקור חוץ מרכז</span>
                <span>הדרכות לעובדים ישראל</span>
                <span>ייעוץ ארגוני הרצליה</span>
                <span>פיתוח מנהלים רמת גן</span>
              </div>
            </div>

            <div className={styles.localCard}>
              <h4>📋 LocalBusiness Schema</h4>
              <div className={styles.codeBlock}>
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Talent Solutions Israel",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "רח׳ הברזל 30",
    "addressLocality": "תל אביב",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.1093",
    "longitude": "34.8375"
  },
  "telephone": "+972-XX-XXXXXXX",
  "openingHours": "Su-Th 08:00-18:00"
}`}
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Priority */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>✅</div>
            <h2 className={styles.cardTitle}>סדר יישום מומלץ</h2>
          </div>

          <div className={styles.priorityGrid}>
            <div className={styles.priorityCard} style={{ borderTopColor: '#ef4444' }}>
              <span className={`${styles.badge} ${styles.badgeDanger}`}>שבוע 1</span>
              <h5>Schema בסיסי</h5>
              <ul>
                <li>Organization Schema לכל העמודים</li>
                <li>BreadcrumbList לניווט</li>
                <li>Service Schema ל-5 עמודים מרכזיים</li>
              </ul>
            </div>

            <div className={styles.priorityCard} style={{ borderTopColor: '#f59e0b' }}>
              <span className={`${styles.badge} ${styles.badgeWarning}`}>שבוע 2</span>
              <h5>FAQ Schema</h5>
              <ul>
                <li>כתוב 3-5 שאלות ייחודיות לכל עמוד</li>
                <li>הוסף FAQPage Schema</li>
                <li>בדוק ב-Rich Results Test</li>
              </ul>
            </div>

            <div className={styles.priorityCard} style={{ borderTopColor: '#10b981' }}>
              <span className={`${styles.badge} ${styles.badgeSuccess}`}>שבוע 3</span>
              <h5>Local SEO</h5>
              <ul>
                <li>עדכון Google Business Profile</li>
                <li>LocalBusiness Schema</li>
                <li>הוספת מילות מפתח גיאוגרפיות</li>
              </ul>
            </div>

            <div className={styles.priorityCard} style={{ borderTopColor: '#6366f1' }}>
              <span className={`${styles.badge} ${styles.badgeInfo}`}>שבוע 4</span>
              <h5>מעקב ואופטימיזציה</h5>
              <ul>
                <li>בדיקת אינדוקס ב-GSC</li>
                <li>מעקב Rich Snippets</li>
                <li>התאמות לפי נתונים</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Implementation for WordPress/React */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.purple}`}>⚙️</div>
            <h2 className={styles.cardTitle}>יישום טכני - React + WordPress</h2>
          </div>

          <div className={styles.techSection}>
            <h4>React Frontend - הוספת Schema</h4>
            <div className={styles.codeBlock}>
{`// components/SchemaMarkup.tsx
import Head from 'next/head';

interface SchemaProps {
  schema: object;
}

export const SchemaMarkup = ({ schema }: SchemaProps) => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  </Head>
);

// שימוש בעמוד:
<SchemaMarkup schema={serviceSchema} />
<SchemaMarkup schema={faqSchema} />
<SchemaMarkup schema={breadcrumbSchema} />`}
            </div>
          </div>

          <div className={styles.techSection}>
            <h4>WordPress Backend - Yoast/RankMath</h4>
            <ul>
              <li>אם משתמשים ב-Yoast: Settings → Schema → הגדרת Organization</li>
              <li>אם משתמשים ב-RankMath: Schema → Custom Schema לכל עמוד</li>
              <li>או: הוספה ידנית ב-wp_head hook</li>
            </ul>
          </div>

          <div className={styles.techSection}>
            <h4>בדיקת תקינות</h4>
            <ul>
              <li><strong>Google Rich Results Test:</strong> search.google.com/test/rich-results</li>
              <li><strong>Schema Validator:</strong> validator.schema.org</li>
              <li><strong>GSC:</strong> בדיקת Enhancements בחשבון</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
