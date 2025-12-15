export const metadata = {
  title: 'Manpower Israel | דוח שנתי 2025 vs 2024',
  description: 'דוח שנתי מקיף - השוואת ביצועים 2025 לעומת 2024 - manpower.co.il',
}

export default function ManpowerAnnualReport() {
  return (
    <div dangerouslySetInnerHTML={{ __html: reportHTML }} />
  )
}

const reportHTML = `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --primary: #1a237e;
            --primary-light: #3949ab;
            --secondary: #00bcd4;
            --accent: #ff6f00;
            --success: #00c853;
            --warning: #ffd600;
            --danger: #ff1744;
            --dark: #1a1a2e;
            --light: #f8f9fa;
            --gradient-primary: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
            --gradient-success: linear-gradient(135deg, #00c853 0%, #69f0ae 100%);
            --gradient-accent: linear-gradient(135deg, #ff6f00 0%, #ffab40 100%);
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
            --shadow-md: 0 4px 20px rgba(0,0,0,0.12);
            --shadow-lg: 0 8px 40px rgba(0,0,0,0.16);
            --shadow-glow: 0 0 40px rgba(0,188,212,0.3);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Heebo', sans-serif;
            background: linear-gradient(180deg, #0a0a1a 0%, #1a1a2e 100%);
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        .header {
            text-align: center;
            padding: 60px 20px;
            background: var(--gradient-primary);
            border-radius: 24px;
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            100% { transform: rotate(360deg); }
        }

        .header-content {
            position: relative;
            z-index: 1;
        }

        .logo-badge {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(10px);
            padding: 12px 24px;
            border-radius: 50px;
            margin-bottom: 24px;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .logo-badge span {
            font-size: 18px;
            font-weight: 600;
        }

        .header h1 {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 16px;
            text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .header .subtitle {
            font-size: 1.5rem;
            opacity: 0.9;
            font-weight: 300;
        }

        .date-badge {
            display: inline-block;
            background: var(--secondary);
            color: var(--dark);
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: 600;
            margin-top: 20px;
        }

        .data-source-banner {
            background: linear-gradient(135deg, rgba(255,193,7,0.2) 0%, rgba(255,152,0,0.1) 100%);
            border: 2px solid rgba(255,193,7,0.5);
            border-radius: 16px;
            padding: 24px 32px;
            margin-bottom: 40px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
        }

        .data-source-banner .icon {
            font-size: 40px;
            flex-shrink: 0;
        }

        .data-source-banner h3 {
            font-size: 1.2rem;
            margin-bottom: 8px;
            color: #ffd54f;
        }

        .data-source-banner p {
            font-size: 14px;
            line-height: 1.7;
            opacity: 0.9;
        }

        .data-source-banner ul {
            margin-top: 12px;
            padding-right: 20px;
            font-size: 13px;
        }

        .data-source-banner li {
            margin-bottom: 6px;
        }

        .executive-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 40px;
        }

        @media (max-width: 1200px) {
            .executive-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
            .executive-grid { grid-template-columns: 1fr; }
            .header h1 { font-size: 2rem; }
        }

        .exec-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 32px;
            text-align: center;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .exec-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--gradient-success);
        }

        .exec-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-glow);
            border-color: var(--secondary);
        }

        .exec-card.highlight::before {
            background: var(--gradient-accent);
        }

        .exec-card.warning::before {
            background: linear-gradient(135deg, #ff9800, #ffc107);
        }

        .exec-card .icon {
            font-size: 48px;
            margin-bottom: 16px;
        }

        .exec-card .label {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            opacity: 0.7;
            margin-bottom: 8px;
        }

        .exec-card .value {
            font-size: 3rem;
            font-weight: 900;
            background: linear-gradient(135deg, #fff 0%, var(--secondary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .exec-card .change {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 700;
            margin-top: 12px;
        }

        .change.up {
            background: rgba(0,200,83,0.2);
            color: #69f0ae;
        }

        .change.down {
            background: rgba(255,23,68,0.2);
            color: #ff8a80;
        }

        .change.neutral {
            background: rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.7);
        }

        .exec-card .source-tag {
            position: absolute;
            top: 12px;
            left: 12px;
            font-size: 10px;
            background: rgba(0,0,0,0.3);
            padding: 4px 8px;
            border-radius: 8px;
            opacity: 0.7;
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin: 48px 0 24px;
        }

        .section-header h2 {
            font-size: 1.8rem;
            font-weight: 700;
        }

        .section-header .line {
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, var(--secondary), transparent);
        }

        .section-header .badge {
            background: var(--primary-light);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }

        .data-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 40px;
        }

        @media (max-width: 900px) {
            .data-grid { grid-template-columns: 1fr; }
        }

        .data-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 32px;
            position: relative;
        }

        .data-card.full-width {
            grid-column: 1 / -1;
        }

        .data-card h3 {
            font-size: 1.3rem;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .data-card h3 span {
            font-size: 24px;
        }

        .data-card h3 .source {
            font-size: 11px;
            background: rgba(0,188,212,0.3);
            padding: 4px 10px;
            border-radius: 10px;
            margin-right: auto;
        }

        .comparison-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 8px;
        }

        .comparison-table th {
            text-align: right;
            padding: 12px 16px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
        }

        .comparison-table td {
            padding: 16px;
            background: rgba(255,255,255,0.03);
            font-weight: 500;
        }

        .comparison-table tr td:first-child {
            border-radius: 0 12px 12px 0;
        }

        .comparison-table tr td:last-child {
            border-radius: 12px 0 0 12px;
        }

        .comparison-table .metric {
            font-weight: 600;
            color: var(--secondary);
        }

        .comparison-table .growth {
            font-weight: 700;
        }

        .comparison-table .growth.positive {
            color: #69f0ae;
        }

        .comparison-table .growth.negative {
            color: #ff8a80;
        }

        .traffic-sources {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 20px;
        }

        .traffic-source {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
            flex: 1;
            min-width: 200px;
        }

        .traffic-source .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .traffic-source .name {
            font-size: 13px;
            opacity: 0.8;
        }

        .traffic-source .value {
            font-weight: 700;
            margin-right: auto;
        }

        .traffic-source .change {
            font-size: 11px;
            padding: 2px 8px;
            border-radius: 10px;
        }

        .chart-container {
            background: rgba(255,255,255,0.03);
            border-radius: 16px;
            padding: 24px;
            margin-top: 24px;
        }

        .chart-wrapper {
            height: 350px;
            position: relative;
        }

        .keywords-table {
            width: 100%;
            border-collapse: collapse;
        }

        .keywords-table th {
            text-align: right;
            padding: 12px;
            border-bottom: 2px solid rgba(255,255,255,0.1);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
        }

        .keywords-table td {
            padding: 14px 12px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .keywords-table tr:hover {
            background: rgba(0,188,212,0.1);
        }

        .keywords-table .rank {
            width: 40px;
            text-align: center;
            font-weight: 800;
            color: var(--secondary);
        }

        .keywords-table .keyword {
            font-weight: 500;
        }

        .keywords-table .clicks {
            font-weight: 700;
            color: #69f0ae;
        }

        .position-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 700;
        }

        .position-badge.gold {
            background: linear-gradient(135deg, #ffd700, #ffab00);
            color: #000;
        }

        .position-badge.silver {
            background: linear-gradient(135deg, #90a4ae, #607d8b);
            color: #fff;
        }

        .position-badge.bronze {
            background: linear-gradient(135deg, #8d6e63, #5d4037);
            color: #fff;
        }

        .pages-table {
            width: 100%;
            border-collapse: collapse;
        }

        .pages-table th {
            text-align: right;
            padding: 12px;
            border-bottom: 2px solid rgba(255,255,255,0.1);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
        }

        .pages-table td {
            padding: 14px 12px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .pages-table tr:hover {
            background: rgba(0,188,212,0.1);
        }

        .page-name {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .page-name .title {
            font-weight: 600;
        }

        .page-name .url {
            font-size: 11px;
            opacity: 0.5;
            direction: ltr;
            text-align: right;
        }

        .insights-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 40px;
        }

        @media (max-width: 900px) {
            .insights-grid { grid-template-columns: 1fr; }
        }

        .insight-card {
            background: linear-gradient(145deg, rgba(0,188,212,0.15) 0%, rgba(0,188,212,0.05) 100%);
            border: 1px solid rgba(0,188,212,0.3);
            border-radius: 20px;
            padding: 28px;
        }

        .insight-card.warning {
            background: linear-gradient(145deg, rgba(255,111,0,0.15) 0%, rgba(255,111,0,0.05) 100%);
            border-color: rgba(255,111,0,0.3);
        }

        .insight-card.success {
            background: linear-gradient(145deg, rgba(0,200,83,0.15) 0%, rgba(0,200,83,0.05) 100%);
            border-color: rgba(0,200,83,0.3);
        }

        .insight-card h4 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
            margin-bottom: 12px;
        }

        .insight-card p {
            font-size: 14px;
            line-height: 1.7;
            opacity: 0.9;
        }

        .validation-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
            border: 2px solid rgba(0,200,83,0.5);
            border-radius: 20px;
            padding: 32px;
            margin: 40px 0;
        }

        .validation-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
        }

        .validation-header .icon {
            font-size: 48px;
        }

        .validation-header h3 {
            font-size: 1.5rem;
        }

        .validation-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        @media (max-width: 900px) {
            .validation-grid { grid-template-columns: 1fr; }
        }

        .validation-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
        }

        .validation-item .source {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }

        .validation-item .check {
            color: #69f0ae;
            font-size: 20px;
        }

        .validation-item .warning-icon {
            color: #ffd54f;
            font-size: 20px;
        }

        .validation-item .details {
            font-size: 12px;
            opacity: 0.7;
            line-height: 1.5;
        }

        .note-box {
            background: rgba(255,193,7,0.1);
            border: 1px solid rgba(255,193,7,0.3);
            border-radius: 12px;
            padding: 16px 20px;
            margin: 16px 0;
            font-size: 13px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .note-box .icon {
            font-size: 20px;
            flex-shrink: 0;
        }

        .note-box.info {
            background: rgba(0,188,212,0.1);
            border-color: rgba(0,188,212,0.3);
        }

        .gsc-limited {
            background: linear-gradient(145deg, rgba(156,39,176,0.15) 0%, rgba(156,39,176,0.05) 100%);
            border: 1px solid rgba(156,39,176,0.3);
            border-radius: 20px;
            padding: 28px;
            margin-bottom: 24px;
        }

        .gsc-limited h4 {
            color: #ce93d8;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .footer {
            text-align: center;
            padding: 40px 20px;
            margin-top: 60px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        .footer .agency {
            font-size: 14px;
            opacity: 0.7;
            margin-bottom: 8px;
        }

        .footer .agency strong {
            color: var(--secondary);
            font-weight: 700;
        }

        .footer .date {
            font-size: 12px;
            opacity: 0.5;
        }

        .growth-highlight {
            display: inline-block;
            background: linear-gradient(135deg, #00c853, #69f0ae);
            color: #000;
            padding: 2px 8px;
            border-radius: 6px;
            font-weight: 700;
        }

        .decline-highlight {
            display: inline-block;
            background: linear-gradient(135deg, #ff5252, #ff8a80);
            color: #000;
            padding: 2px 8px;
            border-radius: 6px;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="header-content">
                <div class="logo-badge">
                    <span>🏢 Manpower Israel</span>
                </div>
                <h1>דוח שנתי מתוקן</h1>
                <p class="subtitle">2025 לעומת 2024 | נתונים מאומתים ומדויקים</p>
                <div class="date-badge">📅 1 בינואר - 12 בדצמבר | V2</div>
            </div>
        </header>

        <div class="data-source-banner">
            <div class="icon">⚠️</div>
            <div>
                <h3>הבהרה חשובה על מקורות הנתונים</h3>
                <p>דוח זה משתמש במקורות נתונים שונים בהתאם לזמינות:</p>
                <ul>
                    <li><strong>GA4 (Google Analytics 4)</strong> - מקור עיקרי להשוואה שנתית. נתונים מלאים מ-2023, 2024, 2025.</li>
                    <li><strong>GSC (Google Search Console)</strong> - נתונים זמינים רק מדצמבר 2024 ואילך. לא ניתן להשוות שנים מלאות!</li>
                    <li><strong>SE Ranking</strong> - נתוני דירוגים נוכחיים בלבד, ללא היסטוריה.</li>
                </ul>
            </div>
        </div>

        <div class="section-header">
            <h2>📊 סיכום מנהלים - השוואה שנתית</h2>
            <div class="line"></div>
            <div class="badge">GA4 - נתונים מלאים</div>
        </div>

        <div class="executive-grid">
            <div class="exec-card highlight">
                <div class="source-tag">GA4</div>
                <div class="icon">👥</div>
                <div class="label">סה"כ סשנים</div>
                <div class="value">1.21M</div>
                <div class="change up">
                    <span>▲</span>
                    <span>+14.3%</span>
                </div>
            </div>

            <div class="exec-card">
                <div class="source-tag">GA4</div>
                <div class="icon">👤</div>
                <div class="label">משתמשים</div>
                <div class="value">1.06M</div>
                <div class="change up">
                    <span>▲</span>
                    <span>+6.6%</span>
                </div>
            </div>

            <div class="exec-card warning">
                <div class="source-tag">GA4</div>
                <div class="icon">🔍</div>
                <div class="label">חיפוש אורגני</div>
                <div class="value">230K</div>
                <div class="change down">
                    <span>▼</span>
                    <span>-6.9%</span>
                </div>
            </div>

            <div class="exec-card">
                <div class="source-tag">GA4</div>
                <div class="icon">📱</div>
                <div class="label">סושיאל (Paid+Organic)</div>
                <div class="value">171K</div>
                <div class="change up">
                    <span>▲</span>
                    <span>+474%</span>
                </div>
            </div>
        </div>

        <div class="validation-card">
            <div class="validation-header">
                <div class="icon">🔍</div>
                <div>
                    <h3>אימות מקורות נתונים</h3>
                    <p style="opacity: 0.7; font-size: 14px;">בדיקת זמינות ואמינות הנתונים לפני הצגתם</p>
                </div>
            </div>
            <div class="validation-grid">
                <div class="validation-item">
                    <div class="source">
                        <span class="check">✓</span>
                        <span>Google Analytics 4</span>
                    </div>
                    <div class="details">
                        נתונים מלאים: 2023, 2024, 2025<br>
                        השוואה שנתית: ✅ תקינה<br>
                        Property ID: 352703565
                    </div>
                </div>
                <div class="validation-item">
                    <div class="source">
                        <span class="warning-icon">⚠️</span>
                        <span>Google Search Console</span>
                    </div>
                    <div class="details">
                        נתונים זמינים: דצמבר 2024+<br>
                        השוואה שנתית: ❌ לא אפשרית<br>
                        סיבה: היסטוריה של 16 חודשים בלבד
                    </div>
                </div>
                <div class="validation-item">
                    <div class="source">
                        <span class="check">✓</span>
                        <span>SE Ranking</span>
                    </div>
                    <div class="details">
                        נתונים נוכחיים: ✅ זמינים<br>
                        מילות מפתח: 91 במעקב<br>
                        Site ID: 8020052
                    </div>
                </div>
            </div>
        </div>

        <div class="section-header">
            <h2>📈 השוואה שנתית מלאה</h2>
            <div class="line"></div>
            <div class="badge">GA4</div>
        </div>

        <div class="data-grid">
            <div class="data-card full-width">
                <h3><span>📊</span> כל מקורות הטראפיק - 2024 vs 2025 <span class="source">GA4</span></h3>

                <table class="comparison-table">
                    <tr>
                        <th>מקור תנועה</th>
                        <th>2024</th>
                        <th>2025</th>
                        <th>שינוי</th>
                        <th>הערות</th>
                    </tr>
                    <tr>
                        <td class="metric">סה"כ סשנים</td>
                        <td>1,057,938</td>
                        <td>1,208,965</td>
                        <td class="growth positive">+14.3%</td>
                        <td>צמיחה כוללת חיובית</td>
                    </tr>
                    <tr>
                        <td class="metric">Direct</td>
                        <td>760,702</td>
                        <td>728,692</td>
                        <td class="growth negative">-4.2%</td>
                        <td>ירידה קלה בכניסות ישירות</td>
                    </tr>
                    <tr>
                        <td class="metric">Organic Search</td>
                        <td>247,085</td>
                        <td>230,031</td>
                        <td class="growth negative">-6.9%</td>
                        <td>ירידה - ייתכן בעיית מעקב</td>
                    </tr>
                    <tr>
                        <td class="metric">Paid Social</td>
                        <td>8,202</td>
                        <td>92,137</td>
                        <td class="growth positive">+1,023%</td>
                        <td>🚀 גידול עצום בפרסום ממומן</td>
                    </tr>
                    <tr>
                        <td class="metric">Organic Social</td>
                        <td>21,580</td>
                        <td>78,967</td>
                        <td class="growth positive">+266%</td>
                        <td>🚀 נוכחות חברתית חזקה</td>
                    </tr>
                    <tr>
                        <td class="metric">Referral</td>
                        <td>3,393</td>
                        <td>26,786</td>
                        <td class="growth positive">+689%</td>
                        <td>🚀 הפניות חיצוניות</td>
                    </tr>
                    <tr>
                        <td class="metric">Paid Search</td>
                        <td>3,942</td>
                        <td>16,661</td>
                        <td class="growth positive">+323%</td>
                        <td>גידול בקמפיינים ממומנים</td>
                    </tr>
                    <tr>
                        <td class="metric">Cross-network</td>
                        <td>4,999</td>
                        <td>23,274</td>
                        <td class="growth positive">+365%</td>
                        <td>קמפיינים חוצי רשתות</td>
                    </tr>
                </table>

                <div class="note-box info">
                    <span class="icon">💡</span>
                    <span><strong>תובנה מרכזית:</strong> למרות ירידה קלה באורגני (-6.9%), הטראפיק הכולל צמח ב-14.3% בזכות השקעה משמעותית בסושיאל (+1,023% Paid, +266% Organic) והפניות (+689%).</span>
                </div>
            </div>
        </div>

        <div class="data-card">
            <h3><span>📱</span> התפלגות מקורות תנועה - 2025 vs 2024 <span class="source">GA4</span></h3>

            <div class="traffic-sources">
                <div class="traffic-source">
                    <div class="dot" style="background: #4285f4;"></div>
                    <span class="name">Direct</span>
                    <span class="value">728,692</span>
                    <span class="change" style="background: rgba(255,82,82,0.2); color: #ff8a80;">-4.2%</span>
                </div>
                <div class="traffic-source">
                    <div class="dot" style="background: #34a853;"></div>
                    <span class="name">Organic Search</span>
                    <span class="value">230,031</span>
                    <span class="change" style="background: rgba(255,82,82,0.2); color: #ff8a80;">-6.9%</span>
                </div>
                <div class="traffic-source">
                    <div class="dot" style="background: #e91e63;"></div>
                    <span class="name">Paid Social</span>
                    <span class="value">92,137</span>
                    <span class="change" style="background: rgba(0,200,83,0.2); color: #69f0ae;">+1,023%</span>
                </div>
                <div class="traffic-source">
                    <div class="dot" style="background: #9c27b0;"></div>
                    <span class="name">Organic Social</span>
                    <span class="value">78,967</span>
                    <span class="change" style="background: rgba(0,200,83,0.2); color: #69f0ae;">+266%</span>
                </div>
                <div class="traffic-source">
                    <div class="dot" style="background: #ff9800;"></div>
                    <span class="name">Referral</span>
                    <span class="value">26,786</span>
                    <span class="change" style="background: rgba(0,200,83,0.2); color: #69f0ae;">+689%</span>
                </div>
                <div class="traffic-source">
                    <div class="dot" style="background: #00bcd4;"></div>
                    <span class="name">Paid Search</span>
                    <span class="value">16,661</span>
                    <span class="change" style="background: rgba(0,200,83,0.2); color: #69f0ae;">+323%</span>
                </div>
            </div>

            <div class="chart-container">
                <div class="chart-wrapper">
                    <canvas id="monthlyChart"></canvas>
                </div>
            </div>
        </div>

        <div class="section-header">
            <h2>🔍 נתוני Google Search Console</h2>
            <div class="line"></div>
            <div class="badge">GSC - נתונים חלקיים</div>
        </div>

        <div class="gsc-limited">
            <h4>⚠️ מגבלת נתונים ב-GSC</h4>
            <p>נתוני GSC זמינים רק מ-<strong>דצמבר 2024</strong> ואילך. GSC שומר היסטוריה של 16 חודשים בלבד, ונראה שה-property אומת/נוסף בסוף 2024.</p>
            <p style="margin-top: 12px;"><strong>לכן:</strong> לא ניתן להשוות שנים מלאות. הנתונים להלן הם מ-2025 בלבד.</p>
        </div>

        <div class="executive-grid">
            <div class="exec-card">
                <div class="source-tag">GSC 2025</div>
                <div class="icon">🖱️</div>
                <div class="label">קליקים (2025)</div>
                <div class="value">201.7K</div>
                <div class="change neutral">
                    <span>—</span>
                    <span>אין השוואה</span>
                </div>
            </div>

            <div class="exec-card">
                <div class="source-tag">GSC 2025</div>
                <div class="icon">👁️</div>
                <div class="label">חשיפות (2025)</div>
                <div class="value">8.6M</div>
                <div class="change neutral">
                    <span>—</span>
                    <span>אין השוואה</span>
                </div>
            </div>

            <div class="exec-card">
                <div class="source-tag">GSC 2025</div>
                <div class="icon">📊</div>
                <div class="label">CTR ממוצע</div>
                <div class="value">2.34%</div>
                <div class="change neutral">
                    <span>—</span>
                    <span>אין השוואה</span>
                </div>
            </div>

            <div class="exec-card">
                <div class="source-tag">GSC 2025</div>
                <div class="icon">📍</div>
                <div class="label">דירוג ממוצע</div>
                <div class="value">20.5</div>
                <div class="change neutral">
                    <span>—</span>
                    <span>אין השוואה</span>
                </div>
            </div>
        </div>

        <div class="data-grid">
            <div class="data-card">
                <h3><span>🔑</span> מילות מפתח מובילות 2025 <span class="source">GSC</span></h3>
                <table class="keywords-table">
                    <tr>
                        <th>#</th>
                        <th>מילת מפתח</th>
                        <th>קליקים</th>
                        <th>דירוג</th>
                    </tr>
                    <tr>
                        <td class="rank">1</td>
                        <td class="keyword">מנפאואר</td>
                        <td class="clicks">10,513</td>
                        <td><span class="position-badge gold">1</span></td>
                    </tr>
                    <tr>
                        <td class="rank">2</td>
                        <td class="keyword">דרושים</td>
                        <td class="clicks">7,076</td>
                        <td><span class="position-badge silver">6</span></td>
                    </tr>
                    <tr>
                        <td class="rank">3</td>
                        <td class="keyword">manpower</td>
                        <td class="clicks">6,310</td>
                        <td><span class="position-badge gold">1</span></td>
                    </tr>
                    <tr>
                        <td class="rank">4</td>
                        <td class="keyword">מנפאואר דרושים</td>
                        <td class="clicks">2,678</td>
                        <td><span class="position-badge gold">1</span></td>
                    </tr>
                    <tr>
                        <td class="rank">5</td>
                        <td class="keyword">manpower israel</td>
                        <td class="clicks">2,034</td>
                        <td><span class="position-badge gold">1</span></td>
                    </tr>
                    <tr>
                        <td class="rank">6</td>
                        <td class="keyword">מנפאוור</td>
                        <td class="clicks">1,770</td>
                        <td><span class="position-badge gold">1</span></td>
                    </tr>
                    <tr>
                        <td class="rank">7</td>
                        <td class="keyword">חברות השמה</td>
                        <td class="clicks">1,099</td>
                        <td><span class="position-badge gold">2</span></td>
                    </tr>
                    <tr>
                        <td class="rank">8</td>
                        <td class="keyword">חיפוש עבודה</td>
                        <td class="clicks">1,061</td>
                        <td><span class="position-badge bronze">8</span></td>
                    </tr>
                    <tr>
                        <td class="rank">9</td>
                        <td class="keyword">manpower דרושים</td>
                        <td class="clicks">1,044</td>
                        <td><span class="position-badge gold">1</span></td>
                    </tr>
                    <tr>
                        <td class="rank">10</td>
                        <td class="keyword">דרושים משאבי אנוש</td>
                        <td class="clicks">1,026</td>
                        <td><span class="position-badge gold">3</span></td>
                    </tr>
                </table>
            </div>

            <div class="data-card">
                <h3><span>📄</span> עמודים מובילים 2025 <span class="source">GSC</span></h3>
                <table class="pages-table">
                    <tr>
                        <th>#</th>
                        <th>עמוד</th>
                        <th>קליקים</th>
                    </tr>
                    <tr>
                        <td class="rank">1</td>
                        <td>
                            <div class="page-name">
                                <span class="title">📊 טבלאות שכר</span>
                                <span class="url">/salary-tables</span>
                            </div>
                        </td>
                        <td class="clicks">88,528</td>
                    </tr>
                    <tr>
                        <td class="rank">2</td>
                        <td>
                            <div class="page-name">
                                <span class="title">🏠 עמוד הבית</span>
                                <span class="url">/</span>
                            </div>
                        </td>
                        <td class="clicks">35,700</td>
                    </tr>
                    <tr>
                        <td class="rank">3</td>
                        <td>
                            <div class="page-name">
                                <span class="title">🔍 חיפוש משרות</span>
                                <span class="url">/search</span>
                            </div>
                        </td>
                        <td class="clicks">24,636</td>
                    </tr>
                    <tr>
                        <td class="rank">4</td>
                        <td>
                            <div class="page-name">
                                <span class="title">💼 משרות משאבי אנוש</span>
                                <span class="url">/search?JOBEXPERTISE=4970</span>
                            </div>
                        </td>
                        <td class="clicks">5,057</td>
                    </tr>
                    <tr>
                        <td class="rank">5</td>
                        <td>
                            <div class="page-name">
                                <span class="title">🎯 מאמר ראיון עבודה</span>
                                <span class="url">/article/ראיון-עבודה</span>
                            </div>
                        </td>
                        <td class="clicks">3,689</td>
                    </tr>
                    <tr>
                        <td class="rank">6</td>
                        <td>
                            <div class="page-name">
                                <span class="title">📞 צור קשר</span>
                                <span class="url">/contact-us</span>
                            </div>
                        </td>
                        <td class="clicks">3,289</td>
                    </tr>
                    <tr>
                        <td class="rank">7</td>
                        <td>
                            <div class="page-name">
                                <span class="title">📍 משרות באר שבע</span>
                                <span class="url">/search?JOBAREA=4119</span>
                            </div>
                        </td>
                        <td class="clicks">3,129</td>
                    </tr>
                    <tr>
                        <td class="rank">8</td>
                        <td>
                            <div class="page-name">
                                <span class="title">⚙️ משרות הנדסה</span>
                                <span class="url">/search?JOBEXPERTISE=4284</span>
                            </div>
                        </td>
                        <td class="clicks">2,690</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section-header">
            <h2>🎯 דירוגים נוכחיים</h2>
            <div class="line"></div>
            <div class="badge">SE Ranking</div>
        </div>

        <div class="executive-grid">
            <div class="exec-card">
                <div class="source-tag">SE Ranking</div>
                <div class="icon">🏆</div>
                <div class="label">מילים בטופ 5</div>
                <div class="value">73</div>
            </div>
            <div class="exec-card">
                <div class="source-tag">SE Ranking</div>
                <div class="icon">🥈</div>
                <div class="label">מילים בטופ 10</div>
                <div class="value">106</div>
            </div>
            <div class="exec-card">
                <div class="source-tag">SE Ranking</div>
                <div class="icon">🥉</div>
                <div class="label">מילים בטופ 30</div>
                <div class="value">143</div>
            </div>
            <div class="exec-card">
                <div class="source-tag">SE Ranking</div>
                <div class="icon">📊</div>
                <div class="label">Visibility Score</div>
                <div class="value">31.2%</div>
            </div>
        </div>

        <div class="section-header">
            <h2>💡 תובנות ומסקנות</h2>
            <div class="line"></div>
        </div>

        <div class="insights-grid">
            <div class="insight-card success">
                <h4>✅ צמיחה כוללת של 14.3%</h4>
                <p>למרות שינויים במיקס התנועה, הטראפיק הכולל לאתר צמח משמעותית - מ-1.06M ל-1.21M סשנים.</p>
            </div>
            <div class="insight-card success">
                <h4>✅ פיצוץ בסושיאל</h4>
                <p>השקעה ב-Paid Social הניבה <span class="growth-highlight">+1,023%</span> גידול. Organic Social צמח ב-<span class="growth-highlight">+266%</span>.</p>
            </div>
            <div class="insight-card warning">
                <h4>⚠️ ירידה באורגני</h4>
                <p>GA4 מראה ירידה של 6.9% בחיפוש אורגני. זה עשוי לנבוע משינויי consent/cookies או תחרות גוברת.</p>
            </div>
            <div class="insight-card">
                <h4>📊 טבלאות שכר = נכס זהב</h4>
                <p>העמוד /salary-tables מביא <strong>88,528 קליקים</strong> - 44% מכל הטראפיק האורגני ב-GSC. נכס תוכן קריטי!</p>
            </div>
            <div class="insight-card success">
                <h4>✅ דומיננטיות מותגית</h4>
                <p>כל וריאציות "מנפאואר" בדירוג <strong>#1</strong>. המותג חזק מאוד בחיפושים ממותגים.</p>
            </div>
            <div class="insight-card">
                <h4>📈 המלצות ל-2026</h4>
                <p>1. להרחיב תוכן סביב "דרושים"<br>2. לחזק עמודי ערים (באר שבע, צפון)<br>3. לבדוק בעיות מעקב ב-GA4</p>
            </div>
        </div>

        <div class="data-card" style="margin-top: 40px; border: 2px solid var(--secondary);">
            <h3><span>📋</span> סיכום מנהלים</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 20px;">
                <div>
                    <h4 style="color: var(--secondary); margin-bottom: 12px;">📈 מה עבד ב-2025</h4>
                    <ul style="line-height: 2; padding-right: 20px;">
                        <li>צמיחה כוללת של <span class="growth-highlight">+14.3%</span> בטראפיק</li>
                        <li>גידול עצום בסושיאל ממומן ואורגני</li>
                        <li>עמוד טבלאות שכר ממשיך להוביל</li>
                        <li>דומיננטיות מלאה במילות מותג</li>
                        <li>106 מילות מפתח בטופ 10</li>
                    </ul>
                </div>
                <div>
                    <h4 style="color: #ff8a80; margin-bottom: 12px;">⚠️ נקודות לשיפור</h4>
                    <ul style="line-height: 2; padding-right: 20px;">
                        <li>ירידה של <span class="decline-highlight">-6.9%</span> באורגני (GA4)</li>
                        <li>לבדוק בעיות consent/tracking</li>
                        <li>להרחיב נוכחות על מילים לא ממותגות</li>
                        <li>לשפר CTR (כרגע 2.34%)</li>
                        <li>להקים GSC מוקדם יותר לפרויקטים חדשים</li>
                    </ul>
                </div>
            </div>
        </div>

        <footer class="footer">
            <p class="agency">דוח זה הופק על ידי <strong>Nadav Digital - SEO Agency</strong></p>
            <p class="date">תאריך הפקה: 15 בדצמבר 2025 | גרסה: V2 - נתונים מתוקנים</p>
            <p style="margin-top: 12px; font-size: 11px; opacity: 0.5;">מקורות: GA4 Property 352703565 | GSC manpower.co.il | SE Ranking Site 8020052</p>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('monthlyChart');
            if (ctx) {
                new Chart(ctx.getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
                        datasets: [
                            {
                                label: '2025 (GA4)',
                                data: [139859, 137426, 164701, 122173, 141656, 150179, 154537, 56573, 35474, 39349, 48961, 20582],
                                borderColor: '#00bcd4',
                                backgroundColor: 'rgba(0, 188, 212, 0.1)',
                                borderWidth: 3,
                                fill: true,
                                tension: 0.4,
                                pointRadius: 6,
                                pointBackgroundColor: '#00bcd4'
                            },
                            {
                                label: '2024 (GA4)',
                                data: [119146, 92414, 99663, 138787, 137799, 134363, 85979, 133124, 36910, 32145, 42694, 17760],
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderWidth: 2,
                                borderDash: [5, 5],
                                fill: true,
                                tension: 0.4,
                                pointRadius: 4,
                                pointBackgroundColor: 'rgba(255, 255, 255, 0.5)'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            intersect: false,
                            mode: 'index'
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    color: '#fff',
                                    font: { family: 'Heebo', size: 12 },
                                    usePointStyle: true
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: { color: 'rgba(255,255,255,0.1)' },
                                ticks: {
                                    color: '#fff',
                                    callback: function(value) {
                                        return value.toLocaleString();
                                    }
                                }
                            },
                            x: {
                                grid: { display: false },
                                ticks: { color: '#fff' }
                            }
                        }
                    }
                });
            }
        });
    </script>
</body>
</html>
`;
