const TechStep = ({ n, title, text, tone = "" }: { n: string; title: string; text: string; tone?: string }) => (
  <div className={`tech-step ${tone}`}>
    <span className="tech-num">{n}</span>
    <div><h3>{title}</h3><p>{text}</p></div>
  </div>
);

const FlowArrow = ({ label }: { label?: string }) => <div className="flow-arrow" aria-hidden="true"><span>{label}</span></div>;

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Навигация по презентации">
        <a className="brand" href="#top"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ УЧЁТА</span></a>
        <div className="nav-links"><a href="#pilot">Пилот</a><a href="#economy">Экономика</a><a href="#roadmap">План</a></div>
        <a className="nav-cta" href="#decision">К решению <span>↓</span></a>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow line">КОНЦЕПЦИЯ ДЛЯ РУКОВОДСТВА · 2026</span>
          <h1>Убираем рутину<br/><em>из бухгалтерии</em></h1>
          <p className="lead">Не покупка «робота», а управляемая программа изменений: измерить процессы, проверить эффект на малом пилоте и масштабировать только подтверждённый результат.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#decision">Какое решение требуется</a>
            <a className="btn text" href="#target">Смотреть схему <span>↓</span></a>
          </div>
          <div className="proof-grid">
            <div><strong>30</strong><span>бухгалтеров<br/>в контуре</span></div>
            <div><strong>12</strong><span>месяцев<br/>до целевой модели</span></div>
            <div><strong>2</strong><span>контрольные<br/>точки Gate</span></div>
            <div><strong>3–5</strong><span>участников<br/>первого пилота</span></div>
          </div>
        </div>
      </header>

      <section className="statement">
        <div className="wrap"><span className="eyebrow">ГЛАВНЫЙ ПРИНЦИП</span><h2>Сначала понять процесс.<br/>Потом выбирать <em>технологию.</em></h2></div>
      </section>

      <section className="section paper" id="target">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">01 · ЦЕЛЕВАЯ КАРТИНА</span><h2>От ручного ввода — <em>к контролю исключений</em></h2><p>Автоматика выполняет повторяемую часть. Бухгалтер подтверждает результат, разбирает отклонения и отвечает за методологию.</p></div>
          <div className="process-flow" aria-label="Целевой процесс обработки документов">
            <div className="flow-card"><span>01 · ВХОД</span><h3>Документы и данные</h3><p>ЭДО · почта · сканы · банк · ERP</p></div>
            <FlowArrow label="единый поток" />
            <div className="flow-card accent"><span>02 · АВТОМАТИКА</span><h3>Распознать и сверить</h3><p>Правила · OCR/IDP · API · штатные функции 1С</p></div>
            <FlowArrow label="только отклонения" />
            <div className="flow-card"><span>03 · ЧЕЛОВЕК</span><h3>Подтвердить и решить</h3><p>Контроль · исключения · методология</p></div>
          </div>
          <div className="target-grid">
            <article><strong>−30…40%</strong><p>времени на рутинные операции</p></article>
            <article><strong>≥80%</strong><p>первичных документов создаются без ручного ввода</p></article>
            <article><strong>−2…3 дня</strong><p>к сроку закрытия месяца</p></article>
          </div>
          <p className="caveat">Целевые значения — ориентиры. Baseline и реалистичный потенциал фиксируются по данным Фазы 1.</p>
        </div>
      </section>

      <section className="section" id="logic">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">02 · ЛОГИКА РЕШЕНИЯ</span><h2>Автоматизируем <em>снизу вверх</em></h2><p>Каждый следующий уровень подключается только если более простой способ не решает задачу.</p></div>
          <div className="tech-ladder">
            <TechStep n="01" title="Устранить операцию" text="Убрать лишнее согласование, дублирование и ручной перенос." />
            <TechStep n="02" title="Штатные функции 1С / ERP" text="ЭДО, DirectBank, сверки, требования ФНС, регламентные задания." />
            <TechStep n="03" title="API и интеграции" text="Надёжный обмен между системами без участия пользователя." />
            <TechStep n="04" title="OCR / IDP и workflow" text="Распознавание документов, маршруты и контроль статусов." tone="highlight" />
            <TechStep n="05" title="RPA" text="Только для стабильной межсистемной рутины без доступного API." />
            <TechStep n="06" title="ИИ / LLM" text="Ассистенты, поиск, черновики и аномалии — с проверкой человеком." />
          </div>
        </div>
      </section>

      <section className="section paper" id="pilot">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">03 · РЕКОМЕНДУЕМЫЙ ПИЛОТ</span><h2>Первичка + ЭДО: <em>узкий и измеримый контур</em></h2><p>Один участок, один тип документа, 3–5 бухгалтеров, 8 недель и обязательное сравнение с baseline.</p></div>
          <div className="pilot-layout">
            <div className="pilot-main">
              <div className="badge">КАНДИДАТ №1</div>
              <h3>Ввод первичных документов</h3>
              <p>Массовая и повторяемая операция с понятными правилами, измеримым временем и доступными классами решений.</p>
              <div className="mini-flow">
                <div><b>Скан / ЭДО</b><span>вход</span></div><i>→</i><div><b>OCR + правила</b><span>обработка</span></div><i>→</i><div><b>1С</b><span>черновик</span></div><i>→</i><div><b>Подтверждение</b><span>контроль</span></div>
              </div>
            </div>
            <div className="criteria-list">
              <div><span>01</span><p><b>Объём и трудоёмкость</b><small>40% веса оценки</small></p></div>
              <div><span>02</span><p><b>Стандартные правила</b><small>15% веса оценки</small></p></div>
              <div><span>03</span><p><b>Измеримый результат</b><small>10% веса оценки</small></p></div>
              <div><span>04</span><p><b>Низкий риск пилота</b><small>человек подтверждает</small></p></div>
            </div>
          </div>
          <div className="pilot-alt"><span>РЕЗЕРВНЫЕ КАНДИДАТЫ</span><b>Банк и разнесение платежей</b><b>Сверки с контрагентами</b><small>Не начинать с закрытия месяца, сложного RPA и генеративного ИИ.</small></div>
        </div>
      </section>

      <section className="section" id="measure">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">04 · КАК ИЗМЕРЯЕМ</span><h2>Решение принимается <em>по данным</em></h2><p>Системные логи показывают масштаб, интервью объясняют причины, а пилот подтверждает достижимый эффект.</p></div>
          <div className="measure-flow">
            <div><span>1</span><h3>Логи 1С / ERP</h3><p>3 месяца событий, очистка и нормализация</p></div><FlowArrow />
            <div><span>2</span><h3>Наблюдение</h3><p>Добровольцы, 2 недели, юридическое оформление</p></div><FlowArrow />
            <div><span>3</span><h3>Интервью</h3><p>Валидация цифр и причин отклонений</p></div><FlowArrow />
            <div className="result"><span>4</span><h3>Карта процессов</h3><p>Часы · объёмы · ошибки · стоимость · потенциал</p></div>
          </div>
          <div className="privacy-note"><b>Важно:</b> анализируем процессы, а не людей. ActivityWatch — только на добровольцах, с прозрачной целью и минимизацией данных.</div>
        </div>
      </section>

      <section className="section paper" id="kpi">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">05 · МЕТРИКИ ПИЛОТА</span><h2>Пять сигналов, что решение <em>работает</em></h2></div>
          <div className="kpi-grid">
            <article><span>01</span><h3>Время</h3><strong>↓</strong><p>медиана и P90 времени на документ</p></article>
            <article><span>02</span><h3>Автоматизация</h3><strong>≥80%</strong><p>без ручных исправлений</p></article>
            <article><span>03</span><h3>Качество</h3><strong>0</strong><p>критических ошибок учёта</p></article>
            <article><span>04</span><h3>Принятие</h3><strong>↑</strong><p>adoption и оценка пользователей</p></article>
            <article><span>05</span><h3>Экономика</h3><strong>+</strong><p>эффект после полной стоимости владения</p></article>
          </div>
        </div>
      </section>

      <section className="section economy" id="economy">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">06 · ЭКОНОМИКА</span><h2>Считаем не «часы», <em>а реализуемый эффект</em></h2><p>Освобождённая мощность имеет ценность только тогда, когда её можно перераспределить, избежать найма или сократить внешние расходы.</p></div>
          <div className="formula"><span>ЭФФЕКТ</span><b>высвобождённая мощность</b><i>×</i><b>коэффициент реализации</b><i>−</i><b>TCO решения</b></div>
          <div className="scenario-grid">
            <article><span>КОНСЕРВАТИВНЫЙ</span><strong>1,3 FTE</strong><p>≈ 2,36 млн ₽ валовой мощности / год</p></article>
            <article className="featured"><span>БАЗОВЫЙ</span><strong>3,4 FTE</strong><p>≈ 6,05 млн ₽ валовой мощности / год</p><small>Рабочий ориентир для проверки</small></article>
            <article><span>ВЫСОКИЙ</span><strong>6,7 FTE</strong><p>≈ 12,03 млн ₽ валовой мощности / год</p></article>
          </div>
          <p className="caveat dark">Сценарии иллюстративные, не финансовое обещание. Финмодель уточняется после baseline, демо вендоров и замера полной TCO.</p>
        </div>
      </section>

      <section className="section paper" id="roadmap">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">07 · ДОРОЖНАЯ КАРТА</span><h2>12 месяцев. <em>Два решения о продолжении.</em></h2><p>До Gate 1 — в основном время команды. До Gate 2 — только ограниченный пилот. Полный бюджет — после доказанного эффекта.</p></div>
          <div className="timeline">
            <article><div className="time"><span>МЕСЯЦ 1</span><b>01</b></div><div><h3>Мандат и измерение</h3><p>Спонсор, команда, юридическое оформление, запуск сбора данных.</p></div></article>
            <article><div className="time"><span>МЕСЯЦ 2</span><b>02</b></div><div><h3>Baseline и выбор пилота</h3><p>Карта процессов, топ‑10 операций, shortlist решений, финмодель.</p></div></article>
            <article className="gate"><div className="time"><span>GATE 1</span><b>G1</b></div><div><h3>Разрешить пилот</h3><p>Утвердить контур, бюджет, метрики и ответственных.</p></div></article>
            <article><div className="time"><span>МЕСЯЦЫ 3–5</span><b>03</b></div><div><h3>Пилот</h3><p>3–5 пользователей, еженедельные замеры, обучение и корректировки.</p></div></article>
            <article className="gate"><div className="time"><span>GATE 2</span><b>G2</b></div><div><h3>Решить по масштабу</h3><p>План/факт, фактический ROI, инциденты и обратная связь.</p></div></article>
            <article><div className="time"><span>МЕСЯЦЫ 5–12</span><b>04</b></div><div><h3>Масштабирование волнами</h3><p>Первичка → сверки и банк → RPA → ИИ‑ассистенты.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section" id="risks">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">08 · КОНТРОЛЬ РИСКОВ</span><h2>Безопасность встроена <em>в процесс</em></h2></div>
          <div className="risk-grid">
            <details open><summary><span>01</span>Ошибки автоматики</summary><p>Человек подтверждает результат на всём горизонте пилота; контрольные процедуры остаются у методолога.</p></details>
            <details><summary><span>02</span>Сопротивление команды</summary><p>Коммуникация «убираем рутину, а не людей», добровольцы и лидеры участков в рабочей группе.</p></details>
            <details><summary><span>03</span>ИБ и 152‑ФЗ</summary><p>Проверка вендоров до пилота, минимизация данных, журналирование и резервный вариант в каждом классе.</p></details>
            <details><summary><span>04</span>Проект расползается</summary><p>Жёсткие Gate: следующая волна не стартует без целевых метрик предыдущей.</p></details>
          </div>
        </div>
      </section>

      <section className="section paper" id="team">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">09 · УПРАВЛЕНИЕ</span><h2>Один спонсор. <em>Одна измеримая цель.</em></h2></div>
          <div className="roles">
            <div><span>СПОНСОР</span><h3>Финдиректор / главбух</h3><p>Решения Gate, бюджет, приоритет</p></div>
            <div className="core"><span>РУКОВОДИТЕЛЬ ПРОЕКТА</span><h3>Никита</h3><p>План, сроки, коммуникации, отчётность</p></div>
            <div><span>МЕТОДОЛОГ</span><h3>Главбух / заместитель</h3><p>Корректность учёта и контроль</p></div>
            <div><span>РАБОЧАЯ ГРУППА</span><h3>Лидеры + ИТ/1С + партнёр</h3><p>Требования, данные, интеграции, тест</p></div>
          </div>
        </div>
      </section>

      <section className="decision" id="decision">
        <div className="wrap decision-grid">
          <div><span className="eyebrow">РЕШЕНИЕ GATE 1</span><h2>Разрешить <em>обследование</em> и подготовку пилота</h2><p>На первом этапе не выбираем платформу навсегда. Получаем объективную карту рутины, подтверждённый приоритет и финансово обоснованный план теста.</p></div>
          <div className="decision-card">
            <span>УТВЕРДИТЬ СЕЙЧАС</span>
            <ol><li>Спонсора и руководителя проекта</li><li>Сбор baseline в течение 6 недель</li><li>Дату Gate 1 в конце месяца 2</li></ol>
            <a className="btn primary" href="mailto:apk181818@gmail.com?subject=Обсудить%20пилот%20автоматизации%20бухгалтерии">Обсудить первый этап</a>
          </div>
        </div>
      </section>

      <footer><div className="wrap"><div className="brand"><strong>KULBATSKII</strong><span>ЦИФРОВЫЕ ИНСТРУМЕНТЫ</span></div><p>Концепция автоматизации рутинных операций бухгалтерии · 2026</p><a href="#top">Наверх ↑</a></div></footer>
      <div className="mobile-nav"><a href="#target">Цель</a><a href="#pilot">Пилот</a><a href="#roadmap">План</a><a className="active" href="#decision">Решение</a></div>
    </main>
  );
}
