import styles from './styles.module.css'

export const metadata = {
  title: 'דוח SEO מקיף - Talent Solutions',
  description: 'דוח SEO מקיף לעמודי שירות - talentsolutions.manpowergroup.co.il',
}

export default function TalentSolutionsReport() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1>דוח SEO מקיף לעמודי שירות</h1>
        <p className={styles.subtitle}>talentsolutions.manpowergroup.co.il</p>
        <span className={styles.date}>מבוסס על נתוני Google Search Console</span>
      </div>

      <div className={styles.container}>
        {/* Executive Summary */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.purple}`}>📊</div>
            <h2 className={styles.cardTitle}>סיכום מנהלים</h2>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>6,018</div>
              <div className={styles.statLabel}>קליקים (12 חודשים)</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>~350K</div>
              <div className={styles.statLabel}>חשיפות כוללות</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>100</div>
              <div className={styles.statLabel}>עמודים מדורגים</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>מילות מפתח פעילות</div>
            </div>
          </div>

          <div className={styles.summaryBox}>
            <h4>ממצאים עיקריים</h4>
            <table className={styles.dataTable}>
              <tbody>
                <tr>
                  <td><strong>עמודי שירות עם פוטנציאל לא ממומש</strong> - יש עמודים עם אלפי חשיפות אבל פוזיציה 30+</td>
                  <td><span className={`${styles.priority} ${styles.priorityHigh}`}>קריטי</span></td>
                </tr>
                <tr>
                  <td><strong>מילות מפתח יעד חסרות</strong> - &quot;רכזת גיוס&quot;, &quot;תגבור גיוס&quot;, &quot;עזרה בגיוס&quot; לא מופיעות בתוכן</td>
                  <td><span className={`${styles.priority} ${styles.priorityHigh}`}>קריטי</span></td>
                </tr>
                <tr>
                  <td><strong>בעיות מבנה כותרות</strong> - חלק מהעמודים עם מספר H1 או היררכיה לא תקינה</td>
                  <td><span className={`${styles.priority} ${styles.priorityMedium}`}>בינוני</span></td>
                </tr>
                <tr>
                  <td><strong>מילות מותג חזקות</strong> - &quot;טאלנט סולושנס&quot; בפוזיציה 1 עם CTR של 43%</td>
                  <td><span className={`${styles.priority} ${styles.priorityLow}`}>חיובי</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Keyword Gap Analysis */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.red}`}>🎯</div>
            <h2 className={styles.cardTitle}>ניתוח פערי מילות מפתח</h2>
          </div>

          <p className={styles.mutedText}>
            המילים הבאות זוהו כמילות חיפוש עם נפח גבוה - חלקן חסרות לחלוטין באתר או מדורגות בצורה חלשה:
          </p>

          <div className={styles.keywordSection}>
            <div className={styles.keywordGroup}>
              <div className={styles.keywordGroupTitle}>מילות מפתח יעד - חסרות באתר</div>
              <div className={styles.keywordsFlex}>
                <span className={styles.keywordTag}>רכזת גיוס במיקור חוץ</span>
                <span className={styles.keywordTag}>תגבור גיוס</span>
                <span className={styles.keywordTag}>עזרה בגיוס עובדים</span>
                <span className={styles.keywordTag}>רכזת גיוס</span>
                <span className={styles.keywordTag}>פתרונות גיוס</span>
                <span className={styles.keywordTag}>עומס גיוס</span>
              </div>
            </div>

            <div className={styles.keywordGroup}>
              <div className={styles.keywordGroupTitle}>מילות מפתח עם פוטנציאל - פוזיציה חלשה</div>
              <div className={styles.keywordsFlex}>
                <span className={`${styles.keywordTag} ${styles.partial}`}>פיתוח מנהלים (8,924 חשיפות, פוז׳ 36)</span>
                <span className={`${styles.keywordTag} ${styles.partial}`}>מיקור חוץ (8,400 חשיפות, פוז׳ 13)</span>
                <span className={`${styles.keywordTag} ${styles.partial}`}>הדרכות לעובדים (1,219 חשיפות, פוז׳ 56)</span>
              </div>
            </div>

            <div className={styles.keywordGroup}>
              <div className={styles.keywordGroupTitle}>מילות מפתח חזקות - מדורגות היטב</div>
              <div className={styles.keywordsFlex}>
                <span className={`${styles.keywordTag} ${styles.found}`}>טאלנט סולושנס (פוז׳ 1)</span>
                <span className={`${styles.keywordTag} ${styles.found}`}>talent solutions (פוז׳ 1)</span>
                <span className={`${styles.keywordTag} ${styles.found}`}>גיוס במיקור חוץ (פוז׳ 1)</span>
                <span className={`${styles.keywordTag} ${styles.found}`}>גיוס טאלנטים (פוז׳ 1)</span>
                <span className={`${styles.keywordTag} ${styles.found}`}>סורסינג (פוז׳ 4)</span>
                <span className={`${styles.keywordTag} ${styles.found}`}>RPO (פוז׳ 6)</span>
              </div>
            </div>
          </div>
        </div>

        {/* High Potential Pages */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.yellow}`}>⚡</div>
            <h2 className={styles.cardTitle}>עמודים עם פוטנציאל גבוה לשיפור</h2>
          </div>

          <p className={styles.mutedText}>
            העמודים הבאים מקבלים חשיפות רבות אך בפוזיציה נמוכה - שיפור קטן יכול להניב תוצאות משמעותיות:
          </p>

          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>עמוד</th>
                <th>חשיפות</th>
                <th>קליקים</th>
                <th>פוזיציה</th>
                <th>פוטנציאל</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>/rpo/</td>
                <td>49,328</td>
                <td>140</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.medium}`}></span> 26.9</span></td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>גבוה מאוד</span></td>
              </tr>
              <tr>
                <td>/תוכניות-פיתוח-מנהלים/</td>
                <td>26,654</td>
                <td>43</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.bad}`}></span> 35.1</span></td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>גבוה מאוד</span></td>
              </tr>
              <tr>
                <td>/גיוס-מקצה-לקצה/</td>
                <td>24,670</td>
                <td>47</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.bad}`}></span> 27.9</span></td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>גבוה מאוד</span></td>
              </tr>
              <tr>
                <td>/סורסינג/</td>
                <td>21,509</td>
                <td>88</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.medium}`}></span> 15.7</span></td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>גבוה</span></td>
              </tr>
              <tr>
                <td>/מרכז-מידע-ותפעול-העובד/</td>
                <td>18,060</td>
                <td>167</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.medium}`}></span> 17.4</span></td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>גבוה</span></td>
              </tr>
              <tr>
                <td>/ייעוץ-ארגוני-ופיתוח-טאלנטים/</td>
                <td>12,830</td>
                <td>28</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.bad}`}></span> 36.3</span></td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>גבוה מאוד</span></td>
              </tr>
              <tr>
                <td>/ליווי-תהליך-סיום-העסקה/</td>
                <td>11,077</td>
                <td>68</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.bad}`}></span> 36.2</span></td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>גבוה מאוד</span></td>
              </tr>
              <tr>
                <td>/הרצאות-הדרכות-וסדנאות/</td>
                <td>10,887</td>
                <td>23</td>
                <td><span className={styles.positionIndicator}><span className={`${styles.positionDot} ${styles.bad}`}></span> 48.7</span></td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>גבוה מאוד</span></td>
              </tr>
            </tbody>
          </table>

          <div className={styles.summaryBox}>
            <h4>💡 תובנה</h4>
            <p className={styles.mutedText}>
              עמוד <strong>/rpo/</strong> מקבל <strong>49,328 חשיפות</strong> אבל רק <strong>140 קליקים</strong> (CTR של 0.28%).
              שיפור הפוזיציה מ-27 ל-5 יכול להעלות את ה-CTR ל-5%+ ולהכפיל את התנועה פי 20!
            </p>
          </div>
        </div>

        {/* Page-by-Page Analysis */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.blue}`}>📝</div>
            <h2 className={styles.cardTitle}>ניתוח מפורט לכל עמוד שירות</h2>
          </div>

          {/* RPO Page */}
          <div className={styles.pageCard}>
            <div className={styles.pageCardHeader}>
              <div>
                <h3 className={styles.pageTitle}>1. RPO - גיוס בשירות מנוהל</h3>
                <p className={styles.pageUrl}>/rpo/</p>
              </div>
              <div className={styles.pageStats}>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>49,328</div>
                  <div className={styles.pageStatLabel}>חשיפות</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>140</div>
                  <div className={styles.pageStatLabel}>קליקים</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>26.9</div>
                  <div className={styles.pageStatLabel}>פוזיציה</div>
                </div>
              </div>
            </div>

            <div className={styles.currentState}>
              <strong>מצב נוכחי:</strong>
              <p>
                Title: &quot;RPO גיוס בשירות מנוהל - Talent-solution&quot;<br />
                H1: &quot;RPO - פתרונות גיוס מנוהלים וגמישים&quot;
              </p>
            </div>

            <div className={styles.issuesSection}>
              <div className={`${styles.issuesBox} ${styles.problems}`}>
                <h5>❌ בעיות שזוהו</h5>
                <ul className={styles.issueList}>
                  <li>H1 לא מכיל &quot;גיוס במיקור חוץ&quot; - מילת החיפוש העיקרית</li>
                  <li>חסר: &quot;רכזת גיוס במיקור חוץ&quot;, &quot;תגבור גיוס&quot;</li>
                  <li>H2 לא ממוקדים למילות חיפוש</li>
                  <li>Meta Description קצר מדי</li>
                </ul>
              </div>
              <div className={`${styles.issuesBox} ${styles.solutions}`}>
                <h5>✓ תיקונים נדרשים</h5>
                <ul className={styles.issueList}>
                  <li>שנה H1: &quot;גיוס במיקור חוץ - RPO | רכזות גיוס מקצועיות&quot;</li>
                  <li>הוסף H2: &quot;מחפשים תגבור גיוס? הפתרון שלנו&quot;</li>
                  <li>הוסף H2: &quot;עזרה בגיוס עובדים - ליווי מקצה לקצה&quot;</li>
                  <li>הוסף פסקה עם מילות המפתח היעד</li>
                </ul>
              </div>
            </div>

            <div className={styles.codeBlock}>
              <span className={styles.comment}>&lt;!-- H1 מומלץ --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h1&gt;</span>גיוס במיקור חוץ - RPO | רכזות גיוס מקצועיות לארגונים<span className={styles.tag}>&lt;/h1&gt;</span>{'\n\n'}
              <span className={styles.comment}>&lt;!-- H2 מומלצים --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>מחפשים תגבור גיוס? הפתרון המקצועי שלנו<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>עזרה בגיוס עובדים - ליווי מלא מהחיפוש ועד הקליטה<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>למה לבחור ברכזת גיוס במיקור חוץ?<span className={styles.tag}>&lt;/h2&gt;</span>
            </div>
          </div>

          {/* תוכניות פיתוח מנהלים */}
          <div className={styles.pageCard}>
            <div className={styles.pageCardHeader}>
              <div>
                <h3 className={styles.pageTitle}>2. תוכניות פיתוח מנהלים</h3>
                <p className={styles.pageUrl}>/תוכניות-פיתוח-מנהלים/</p>
              </div>
              <div className={styles.pageStats}>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>26,654</div>
                  <div className={styles.pageStatLabel}>חשיפות</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>43</div>
                  <div className={styles.pageStatLabel}>קליקים</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>35.1</div>
                  <div className={styles.pageStatLabel}>פוזיציה</div>
                </div>
              </div>
            </div>

            <div className={styles.currentState}>
              <strong>מצב נוכחי:</strong>
              <p>
                Title: &quot;תוכניות פיתוח מנהלים - Talent-solution&quot;<br />
                H1: &quot;תכניות פיתוח ניהולי&quot; (שגיאת כתיב: תכניות במקום תוכניות)
              </p>
            </div>

            <div className={styles.issuesSection}>
              <div className={`${styles.issuesBox} ${styles.problems}`}>
                <h5>❌ בעיות שזוהו</h5>
                <ul className={styles.issueList}>
                  <li><strong>שגיאת כתיב ב-H1:</strong> &quot;תכניות&quot; במקום &quot;תוכניות&quot;</li>
                  <li>H1 לא תואם למילת החיפוש &quot;פיתוח מנהלים&quot; (8,924 חשיפות!)</li>
                  <li>יש 2 כותרות H1 בעמוד - צריך רק אחת</li>
                  <li>חסר תוכן עם &quot;קורס פיתוח מנהלים&quot;, &quot;הדרכת מנהלים&quot;</li>
                </ul>
              </div>
              <div className={`${styles.issuesBox} ${styles.solutions}`}>
                <h5>✓ תיקונים נדרשים</h5>
                <ul className={styles.issueList}>
                  <li>תקן H1: &quot;פיתוח מנהלים | תוכניות הכשרה והדרכה לארגונים&quot;</li>
                  <li>הסר את ה-H1 השני או המר ל-H2</li>
                  <li>הוסף H2: &quot;קורס פיתוח מנהלים - השקעה בעתיד הארגון&quot;</li>
                  <li>הוסף H2: &quot;הדרכות מנהלים מותאמות אישית&quot;</li>
                </ul>
              </div>
            </div>

            <div className={styles.codeBlock}>
              <span className={styles.comment}>&lt;!-- H1 מומלץ (תיקון שגיאת כתיב + מילת מפתח) --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h1&gt;</span>פיתוח מנהלים | תוכניות הכשרה והדרכה לארגונים<span className={styles.tag}>&lt;/h1&gt;</span>{'\n\n'}
              <span className={styles.comment}>&lt;!-- H2 מומלצים --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>תוכנית פיתוח מנהלים - מהחזון למעשה<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>קורס פיתוח מנהלים לכל דרגי הניהול<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>הדרכות מנהלים מותאמות לצרכי הארגון<span className={styles.tag}>&lt;/h2&gt;</span>
            </div>
          </div>

          {/* סורסינג */}
          <div className={styles.pageCard}>
            <div className={styles.pageCardHeader}>
              <div>
                <h3 className={styles.pageTitle}>3. סורסינג ופתרונות גיוס</h3>
                <p className={styles.pageUrl}>/סורסינג/</p>
              </div>
              <div className={styles.pageStats}>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>21,509</div>
                  <div className={styles.pageStatLabel}>חשיפות</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>88</div>
                  <div className={styles.pageStatLabel}>קליקים</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>15.7</div>
                  <div className={styles.pageStatLabel}>פוזיציה</div>
                </div>
              </div>
            </div>

            <div className={styles.currentState}>
              <strong>מצב נוכחי:</strong>
              <p>
                Title: &quot;פתרונות גיוס טאלנטים | Talent-solution | Attract&quot;<br />
                H1: &quot;סורסינג ופתרונות גיוס&quot;
              </p>
            </div>

            <div className={styles.issuesSection}>
              <div className={`${styles.issuesBox} ${styles.problems}`}>
                <h5>❌ בעיות שזוהו</h5>
                <ul className={styles.issueList}>
                  <li>Title לא תואם ל-H1 (Attract vs סורסינג)</li>
                  <li>חסר: &quot;מה זה סורסינג&quot; (741 חשיפות)</li>
                  <li>חסר: &quot;גיוס טאלנטים&quot; (1,410 חשיפות)</li>
                  <li>H2 כלליים מדי, לא ממוקדי מילות מפתח</li>
                </ul>
              </div>
              <div className={`${styles.issuesBox} ${styles.solutions}`}>
                <h5>✓ תיקונים נדרשים</h5>
                <ul className={styles.issueList}>
                  <li>עדכן Title: &quot;סורסינג ופתרונות גיוס טאלנטים | Talent Solutions&quot;</li>
                  <li>הוסף H2: &quot;מה זה סורסינג ואיך זה עוזר לארגון שלכם?&quot;</li>
                  <li>הוסף H2: &quot;גיוס טאלנטים - איתור המועמדים הטובים ביותר&quot;</li>
                  <li>הוסף FAQ Schema עם שאלות נפוצות</li>
                </ul>
              </div>
            </div>

            <div className={styles.codeBlock}>
              <span className={styles.comment}>&lt;!-- Title מומלץ --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;title&gt;</span>סורסינג ופתרונות גיוס טאלנטים | Talent Solutions<span className={styles.tag}>&lt;/title&gt;</span>{'\n\n'}
              <span className={styles.comment}>&lt;!-- H2 מומלצים --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>מה זה סורסינג ולמה זה חשוב לארגון שלכם?<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>גיוס טאלנטים - השיטות המתקדמות שלנו<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>איך מתחילים? תהליך הסורסינג שלנו<span className={styles.tag}>&lt;/h2&gt;</span>
            </div>
          </div>

          {/* Outplacement */}
          <div className={styles.pageCard}>
            <div className={styles.pageCardHeader}>
              <div>
                <h3 className={styles.pageTitle}>4. Outplacement - ליווי בסיום העסקה</h3>
                <p className={styles.pageUrl}>/ליווי-תהליך-סיום-העסקה-לעובדים-וארגונ/</p>
              </div>
              <div className={styles.pageStats}>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>11,077</div>
                  <div className={styles.pageStatLabel}>חשיפות</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>68</div>
                  <div className={styles.pageStatLabel}>קליקים</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>36.2</div>
                  <div className={styles.pageStatLabel}>פוזיציה</div>
                </div>
              </div>
            </div>

            <div className={styles.currentState}>
              <strong>מצב נוכחי:</strong>
              <p>
                Title: &quot;Outplacement - ליווי בסיום העסקה - Talent-solution&quot;<br />
                H1: &quot;Outplacement - ליווי בסיום ההעסקה&quot;
              </p>
            </div>

            <div className={styles.issuesSection}>
              <div className={`${styles.issuesBox} ${styles.problems}`}>
                <h5>❌ בעיות שזוהו</h5>
                <ul className={styles.issueList}>
                  <li>&quot;ליווי מפוטרים&quot; (696 חשיפות, פוז׳ 7.2) - חסר ב-H1</li>
                  <li>&quot;ליווי פורשים&quot; (655 חשיפות, פוז׳ 10.1) - חסר</li>
                  <li>URL ארוך מדי וחתוך</li>
                  <li>חסר תוכן על &quot;פיצויים&quot;, &quot;זכויות עובדים&quot;</li>
                </ul>
              </div>
              <div className={`${styles.issuesBox} ${styles.solutions}`}>
                <h5>✓ תיקונים נדרשים</h5>
                <ul className={styles.issueList}>
                  <li>עדכן H1: &quot;ליווי מפוטרים ופורשים | Outplacement מקצועי&quot;</li>
                  <li>הוסף H2: &quot;ליווי מפוטרים - תמיכה מקצועית לדרך הבאה&quot;</li>
                  <li>הוסף H2: &quot;ליווי פורשים - מעבר לקריירה חדשה&quot;</li>
                  <li>צור redirect מה-URL הארוך ל-URL קצר יותר</li>
                </ul>
              </div>
            </div>

            <div className={styles.codeBlock}>
              <span className={styles.comment}>&lt;!-- H1 מומלץ --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h1&gt;</span>ליווי מפוטרים ופורשים | Outplacement מקצועי<span className={styles.tag}>&lt;/h1&gt;</span>{'\n\n'}
              <span className={styles.comment}>&lt;!-- H2 מומלצים --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>ליווי מפוטרים - תמיכה מקצועית בתקופת מעבר<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>ליווי פורשים לפנסיה - תכנון הפרק הבא<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>ליווי ארגוני בתהליכי פיטורים<span className={styles.tag}>&lt;/h2&gt;</span>
            </div>
          </div>

          {/* הדרכות */}
          <div className={styles.pageCard}>
            <div className={styles.pageCardHeader}>
              <div>
                <h3 className={styles.pageTitle}>5. הדרכות בעולמות הגיוס</h3>
                <p className={styles.pageUrl}>/הרצאות-הדרכות-וסדנאות-מקצועיות-לצוות/</p>
              </div>
              <div className={styles.pageStats}>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>10,887</div>
                  <div className={styles.pageStatLabel}>חשיפות</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>23</div>
                  <div className={styles.pageStatLabel}>קליקים</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>48.7</div>
                  <div className={styles.pageStatLabel}>פוזיציה</div>
                </div>
              </div>
            </div>

            <div className={styles.currentState}>
              <strong>מצב נוכחי:</strong>
              <p>
                Title: &quot;הדרכות בעולמות הגיוס - Talent-solution&quot;<br />
                H1: &quot;הדרכות בעולמות הגיוס: ידע זה כח&quot;
              </p>
            </div>

            <div className={styles.issuesSection}>
              <div className={`${styles.issuesBox} ${styles.problems}`}>
                <h5>❌ בעיות שזוהו</h5>
                <ul className={styles.issueList}>
                  <li>&quot;הדרכות לעובדים&quot; (1,219 חשיפות, פוז׳ 56!) - חסר ב-H1</li>
                  <li>&quot;הדרכות לארגונים&quot; (320 חשיפות) - חסר</li>
                  <li>פוזיציה 48.7 - העמוד כמעט לא מופיע בתוצאות</li>
                  <li>H1 לא ממוקד למילות חיפוש עיקריות</li>
                </ul>
              </div>
              <div className={`${styles.issuesBox} ${styles.solutions}`}>
                <h5>✓ תיקונים נדרשים</h5>
                <ul className={styles.issueList}>
                  <li>שנה H1: &quot;הדרכות לעובדים ולארגונים | סדנאות מקצועיות&quot;</li>
                  <li>הוסף H2: &quot;הדרכות לעובדים - פיתוח מיומנויות מקצועיות&quot;</li>
                  <li>הוסף H2: &quot;סדנאות והרצאות לארגונים&quot;</li>
                  <li>הוסף תוכן משמעותי - העמוד דליל מדי</li>
                </ul>
              </div>
            </div>

            <div className={styles.codeBlock}>
              <span className={styles.comment}>&lt;!-- H1 מומלץ --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h1&gt;</span>הדרכות לעובדים ולארגונים | סדנאות והרצאות מקצועיות<span className={styles.tag}>&lt;/h1&gt;</span>{'\n\n'}
              <span className={styles.comment}>&lt;!-- H2 מומלצים --&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>הדרכות לעובדים - שדרוג מיומנויות מקצועיות<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>הדרכות לארגונים - פתרונות מותאמים אישית<span className={styles.tag}>&lt;/h2&gt;</span>{'\n'}
              <span className={styles.tag}>&lt;h2&gt;</span>סדנאות מעשיות בעולמות הגיוס וה-HR<span className={styles.tag}>&lt;/h2&gt;</span>
            </div>
          </div>

          {/* ייעוץ ארגוני */}
          <div className={styles.pageCard}>
            <div className={styles.pageCardHeader}>
              <div>
                <h3 className={styles.pageTitle}>6. ייעוץ ארגוני</h3>
                <p className={styles.pageUrl}>/ייעוץ-ארגוני-ופיתוח-טאלנטים/</p>
              </div>
              <div className={styles.pageStats}>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>12,830</div>
                  <div className={styles.pageStatLabel}>חשיפות</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>28</div>
                  <div className={styles.pageStatLabel}>קליקים</div>
                </div>
                <div className={styles.pageStat}>
                  <div className={styles.pageStatValue}>36.3</div>
                  <div className={styles.pageStatLabel}>פוזיציה</div>
                </div>
              </div>
            </div>

            <div className={styles.issuesSection}>
              <div className={`${styles.issuesBox} ${styles.problems}`}>
                <h5>❌ בעיות שזוהו</h5>
                <ul className={styles.issueList}>
                  <li>פוזיציה 36.3 - העמוד לא נראה בתוצאות</li>
                  <li>Title ו-H1 לא מותאמים למילות חיפוש</li>
                  <li>חסר: &quot;ייעוץ ארגוני לחברות&quot;, &quot;ייעוץ HR&quot;</li>
                  <li>תוכן קצר מדי לדירוג טוב</li>
                </ul>
              </div>
              <div className={`${styles.issuesBox} ${styles.solutions}`}>
                <h5>✓ תיקונים נדרשים</h5>
                <ul className={styles.issueList}>
                  <li>הרחב את התוכן ל-1,500+ מילים</li>
                  <li>הוסף case studies ודוגמאות</li>
                  <li>הוסף H2: &quot;ייעוץ ארגוני לחברות - שיפור ביצועים&quot;</li>
                  <li>הוסף FAQ Schema</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Plan */}
        <div className={`${styles.card} ${styles.pageBreak}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.green}`}>🎯</div>
            <h2 className={styles.cardTitle}>תוכנית פעולה - סדר עדיפויות</h2>
          </div>

          <div className={styles.actionGrid}>
            <div className={styles.actionCard} style={{ borderTopColor: 'var(--danger)' }}>
              <span className={`${styles.priority} ${styles.priorityHigh}`}>שבוע 1</span>
              <h5>תיקוני קוד דחופים</h5>
              <ul>
                <li>תקן שגיאת כתיב ב&quot;תוכניות פיתוח מנהלים&quot;</li>
                <li>הסר H1 כפולים מכל העמודים</li>
                <li>עדכן H1 בעמוד RPO עם מילות מפתח</li>
                <li>תקן היררכיית כותרות (H1→H2→H3)</li>
              </ul>
            </div>

            <div className={styles.actionCard} style={{ borderTopColor: 'var(--warning)' }}>
              <span className={`${styles.priority} ${styles.priorityMedium}`}>שבועות 2-3</span>
              <h5>תוכן ומילות מפתח</h5>
              <ul>
                <li>הוסף H2 עם מילות מפתח יעד לכל עמוד</li>
                <li>צור תוכן על &quot;רכזת גיוס במיקור חוץ&quot;</li>
                <li>הוסף פסקאות עם &quot;תגבור גיוס&quot;, &quot;עזרה בגיוס&quot;</li>
                <li>עדכן Meta Descriptions ל-155 תווים</li>
              </ul>
            </div>

            <div className={styles.actionCard} style={{ borderTopColor: 'var(--success)' }}>
              <span className={`${styles.priority} ${styles.priorityLow}`}>חודש 2</span>
              <h5>הרחבת תוכן</h5>
              <ul>
                <li>הרחב כל עמוד שירות ל-1,500+ מילים</li>
                <li>הוסף FAQ Schema לעמודים מרכזיים</li>
                <li>צור לינקים פנימיים בין עמודי השירות</li>
                <li>הוסף case studies ותוצאות</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Summary Table */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIcon} ${styles.purple}`}>⚙️</div>
            <h2 className={styles.cardTitle}>סיכום טכני לצוות הפיתוח</h2>
          </div>

          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>עמוד</th>
                <th>בעיה</th>
                <th>תיקון</th>
                <th>עדיפות</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>/תוכניות-פיתוח-מנהלים/</td>
                <td>שגיאת כתיב + 2 כותרות H1</td>
                <td>תקן &quot;תכניות&quot;→&quot;תוכניות&quot;, הסר H1 שני</td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>דחוף</span></td>
              </tr>
              <tr>
                <td>/rpo/</td>
                <td>H1 לא מכיל מילות מפתח עבריות</td>
                <td>שנה ל: &quot;גיוס במיקור חוץ - RPO&quot;</td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>דחוף</span></td>
              </tr>
              <tr>
                <td>/הרצאות-הדרכות.../</td>
                <td>פוזיציה 48.7, תוכן דליל</td>
                <td>הוסף 1,000+ מילים, עדכן H1</td>
                <td><span className={`${styles.badge} ${styles.badgeDanger}`}>דחוף</span></td>
              </tr>
              <tr>
                <td>/סורסינג/</td>
                <td>Title לא תואם ל-H1</td>
                <td>סנכרן Title עם H1</td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>בינוני</span></td>
              </tr>
              <tr>
                <td>/ליווי-תהליך-סיום.../</td>
                <td>URL ארוך מדי</td>
                <td>צור redirect ל-/outplacement/</td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>בינוני</span></td>
              </tr>
              <tr>
                <td>כל העמודים</td>
                <td>חסרות מילות מפתח יעד</td>
                <td>הוסף H2 עם: רכזת גיוס, תגבור גיוס</td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>בינוני</span></td>
              </tr>
              <tr>
                <td>כל העמודים</td>
                <td>Meta Description קצר</td>
                <td>הרחב ל-150-160 תווים</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>נמוך</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
