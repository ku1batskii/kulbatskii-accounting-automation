const TechStep = ({ n, title, text, cost }: { n: string; title: string; text: string; cost: string }) => (
  <div className="tech-step">
    <span className="tech-num">{n}</span>
    <div><h3>{title}</h3>{text && <p>{text}</p>}</div>
    <small>{cost}</small>
  </div>
);

const processes = [
  ["01", "Первичка", "Инвойсы, счета и акты — распознавание и автосоздание в 1С"],
  ["02", "E-invoicing", "Подготовка клиентского контура к обязательному мандату 2027"],
  ["03", "Банк", "Выписки, автосопоставление платежей, проводки"],
  ["04", "Сверки", "Автосверка инвойсов и взаиморасчётов"],
  ["05", "Запросы FTA", "Автоподбор документов и контроль сроков ответа"],
  ["06", "VAT и закрытие", "Мониторинг документов, автопроверки и отчётность"],
];

const weights = [
  ["20%", "Объём операций"],
  ["20%", "Трудоёмкость"],
  ["15%", "Стандартизированность правил"],
  ["10%", "Качество исходных данных"],
  ["10%", "Измеримость эффекта"],
  ["10%", "Стабильность процесса"],
  ["15%", "Риск · интеграция · владелец"],
];

const phases = [
  ["АУДИТ", "8 НЕД · AED 45 ТЫС."],
  ["G1", ""], ["ПИЛОТ", "9 НЕД"], ["G2", ""],
  ["МАСШТАБИРОВАНИЕ ВОЛНАМИ", "МЕС 5–12"],
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Навигация по презентации">
        <a className="brand" href="#top"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ</span></a>
        <div className="nav-links"><a href="#audit">Аудит</a><a href="#pilot">Пилот</a><a href="#roadmap">План</a></div>
        <a className="nav-cta" href="#decision">Запустить аудит <span>↓</span></a>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow line">АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ · GULF BRIDGE · ТИЗЕР</span>
          <div className="hero-copy">
            <h1>Как увеличить клиентский портфель<br/>без пропорционального найма?<em>ИИ-автоматизация должна повысить производительность, а не просто сократить часы.</em></h1>
            <p className="lead">30 бухгалтеров ведут учёт 300+ клиентских компаний и наш собственный. Стоимость команды известна; задача проекта — определить, какие процессы ограничивают её производительность и где автоматизация даст собственнику измеримый рост.</p>
          </div>
          <div className="hero-evidence" aria-label="Масштаб проблемы">
            <article><strong>~10 юрлиц</strong><span>на бухгалтера — текущая средняя нагрузка</span></article>
            <article><strong>×2–3</strong><span>проверяемый потенциал роста производительности без найма</span></article>
            <article><strong>2027</strong><span>e-invoicing обязателен в ОАЭ для всех наших клиентов</span></article>
          </div>
          <div className="hero-ask"><p>Просим <b>20 минут</b>, чтобы показать маршрут: от карты процессов — к пилоту ИИ-автоматизации и подтверждённой выгоде для собственника.</p><a href="#problem">Смотреть маршрут <span>↓</span></a></div>
        </div>
      </header>

      <section className="section paper" id="problem">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">01 · ЧТО ПРОИСХОДИТ СЕЙЧАС</span><h2>ФОТ известен. <em>Резерв производительности — нет.</em></h2><p>Собственник видит стоимость бухгалтерии, но не видит, какие операции мешают той же команде обслуживать больше компаний с контролируемым качеством.</p></div>
          <div className="problem-grid">
            <article><span>01</span><h3>~10 юрлиц на человека</h3><p>Это текущая средняя нагрузка. Доступный резерв команды по процессам пока не определён.</p></article>
            <article><span>02</span><h3>ФОТ без структуры потерь</h3><p>Общая стоимость известна, но часы ввода, сверок, поиска и исправлений не разложены по процессам и выгоде.</p></article>
            <article><span>03</span><h3>Рост через новый найм</h3><p>Без изменения процессов новые клиентские компании требуют дополнительных людей и постепенно снижают маржу.</p></article>
            <article><span>04</span><h3>E-invoicing 2027</h3><p>Мандат затронет каждого нашего клиента. Войти в него лучше с управляемым автоматизированным контуром.</p></article>
          </div>
          <div className="pain-conclusion"><p>Главная задача — определить, какую часть оплаченного времени можно использовать для повышения производительности с помощью стандартизации, интеграций и ИИ.</p><a href="#target">Перейти к выгоде собственника <span>→</span></a></div>
        </div>
      </section>

      <section className="section" id="target">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">02 · ВЫГОДА ДЛЯ СОБСТВЕННИКА</span><h2>Больше компаний. <em>Та же команда.</em></h2><p>ИИ-автоматизация должна увеличить пропускную способность бухгалтерии, защитить маржу и снизить зависимость роста от нового найма. Диапазоны подтверждаются аудитом и пилотом.</p></div>
          <div className="target-layout">
            <div className="target-shifts">
              <article><h3>Рост портфеля без пропорционального найма</h3><p>Рост производительности позволяет обслуживать новые компании той же командой</p></article>
              <article><h3>Защита маржи на каждом клиенте</h3><p>Повторяемые операции выполняются системой, исключения остаются человеку</p></article>
              <article><h3>Меньше зависимости от отдельных специалистов</h3><p>Правила и контроль закрепляются в управляемом процессе</p></article>
              <article><h3>Готовность к e-invoicing 2027</h3><p>Клиентский контур масштабируется без роста ручной нагрузки</p></article>
            </div>
            <div className="target-metrics">
              <article><strong>−25…40%</strong><p>ручного времени на рутинные операции</p></article>
              <article><strong>60–80%</strong><p>первички — сквозная автообработка (STP)</p></article>
              <article><strong>×2–3</strong><p>больше юрлиц на бухгалтера без найма</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper" id="scope">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">03 · ОБЪЁМ</span><h2>Карта <em>рутинных процессов</em></h2><p>Девять участков рутины. Автоматизируем не «бухгалтерию вообще», а конкретные из них — по данным.</p></div>
          <div className="routine-grid">
            {processes.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="logic">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">04 · ПРИНЦИП ВЫБОРА РЕШЕНИЯ</span><h2>Иерархия способов. <em>Технология — последний ответ.</em></h2></div>
          <div className="tech-ladder">
            <TechStep n="1" title="Устранить операцию" text="" cost="бесплатно" />
            <TechStep n="2" title="Стандартизировать процесс" text="" cost="бесплатно" />
            <TechStep n="3" title="Штатные функции 1С / ERP" text="" cost="почти без затрат" />
            <TechStep n="4" title="API и интеграции" text="" cost="разово" />
            <TechStep n="5" title="Распознавание документов (OCR)" text="" cost="подписка" />
            <TechStep n="6" title="Workflow / маршруты" text="" cost="по месту" />
            <TechStep n="7" title="RPA-роботы" text="" cost="посл. слой" />
            <TechStep n="8" title="ИИ-ассистенты" text="" cost="упр. риск" />
          </div>
          <p className="privacy-note"><b>RPA</b> — последний интеграционный слой, а не первый способ. <b>ИИ</b> не имеет права проводить документы, платить и отвечать регуляторам без подтверждения человеком.</p>
        </div>
      </section>

      <section className="section paper" id="measure">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">05 · КАК ИЗМЕРЯЕМ ТЕКУЩУЮ РАБОТУ</span><h2>Три источника данных. <em>Смотрим процессы, а не людей.</em></h2></div>
          <div className="source-grid">
            <article><span>ОСНОВНОЙ</span><h3>Журналы 1С</h3><p>Кто, когда и какой документ создал и провёл — за 3 месяца по всем 30 бухгалтерам. ETL → event log → process mining.</p></article>
            <article><span>КОНТЕКСТ</span><h3>Интервью и наблюдение</h3><p>Валидация цифр по участкам: первичка, банк, сверки, VAT, закрытие и клиентская отчётность.</p></article>
            <article><span>ОГРАНИЧЕННО</span><h3>Task mining</h3><p>5–7 добровольцев, 2 недели — только там, где логи не видят работу (Excel, почта, бумага).</p></article>
          </div>
          <div className="data-rules"><span>обезличивание до аналитики</span><span>без содержимого документов</span><span>трекинг только добровольцев</span><span>не для оценки сотрудников</span><span>UAE PDPL</span></div>
        </div>
      </section>

      <section className="section" id="selection">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">06 · КАК ВЫБИРАЕТСЯ ПИЛОТ</span><h2>Пилот выбирают <em>данные, а не мнения.</em></h2></div>
          <div className="selection-grid">
            <div className="weights">{weights.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
            <div className="method-card"><span>МЕТОД</span><p>Каждый процесс оценивается по 10-балльной шкале с весами. Побеждает лучшее соотношение <b>эффект × простота × низкий риск.</b></p><p>Пилот выбирают данные, а не мнения — в том числе не мнение инициатора проекта.</p></div>
          </div>
        </div>
      </section>

      <section className="section audit-product" id="audit">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">07 · ПРОДУКТ</span><h2>Аудит потенциала <em>автоматизации</em></h2><p>За восемь недель раскладываем известную стоимость команды по процессам и показываем, где ИИ-автоматизация способна дать собственнику рост производительности и маржи.</p></div>
          <div className="audit-outcomes">
            <article><span>01</span><h3>Структура</h3><p>Где концентрируются часы, возвраты и стоимость ручных операций</p></article>
            <article><span>02</span><h3>Выгода</h3><p>Как найденный резерв превратить в новых клиентов, маржу или отказ от найма</p></article>
            <article><span>03</span><h3>Решение</h3><p>Обоснование пилота, критерии успеха, бюджетный предел и план запуска</p></article>
          </div>
          <div className="audit-offer">
            <div className="audit-offer-main">
              <span>ФИКСИРОВАННЫЙ КОНТУР</span>
              <strong>AED 45 000</strong>
              <p>8 недель · менее 1% годового ФОТ бухгалтерии</p>
              <a href="#decision">Зафиксировать старт <span>→</span></a>
            </div>
            <div className="audit-workplan">
              <article><span>01 · НЕД 1–2</span><h3>Подключение</h3><p>Контур данных, интервью, правила приватности и добровольцы для task mining.</p></article>
              <article><span>02 · НЕД 2–6</span><h3>Измерение</h3><p>Журналы 1С, объёмы, часы, ошибки и карта фактической стоимости процессов.</p></article>
              <article><span>03 · НЕД 6–8</span><h3>Синтез</h3><p>Приоритеты, финмодель, обоснование пилота и защита решения перед руководством.</p></article>
            </div>
          </div>
          <p className="audit-price-note">Нагрузка на команду ограничена: ИТ помогает с выгрузками, владельцы процессов участвуют в коротких интервью, наблюдение проводится только с добровольцами.</p>
          <div className="audit-credit"><div><span>ЗАЧЁТ В ПИЛОТ</span><strong>100%</strong><small>полная стоимость аудита</small></div><div><h3>Стоимость аудита работает дальше.</h3><p>При запуске пилота AED 45 000 полностью входят в его бюджет. Если продолжения нет, у Gulf Bridge остаются карта процессов, baseline и обоснованное решение.</p></div></div>
          <p className="audit-limit"><b>Граница продукта:</b> внедрение и лицензии в аудит не входят. Мы не обещаем ROI до измерения — мы создаём данные, на которых его можно честно посчитать.</p>
        </div>
      </section>

      <section className="section paper" id="pilot">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">08 · РЕКОМЕНДУЕМЫЙ ПИЛОТ</span><h2>Предварительный <em>кандидат</em></h2></div>
          <div className="candidate-grid pilot-candidates">
            <article className="primary-candidate"><span>ОСНОВНОЙ КАНДИДАТ</span><h3>Ввод первички + e-invoicing</h3><p>Самый массовый ручной труд: большой поток, повторяемые типы документов и измеримый результат. Публичный ориентир: ввод 50 счетов — с 3 часов до ~25 минут.</p><strong>3 ч <i>→</i> ~25 мин</strong></article>
            <article className="reserve-candidate"><span>РЕЗЕРВНЫЙ КАНДИДАТ</span><h3>Банк или сверки</h3><p>Ежедневный объём и стабильные правила сопоставления. Окончательный выбор — только по данным обследования.</p></article>
          </div>
          <div className="pilot-scope" aria-label="Контур пилота"><span><b>1</b> процесс</span><span><b>1</b> участок</span><span><b>3–5</b> бухгалтеров</span><span><b>9</b> недель</span><span>полное закрытие месяца</span><span>подтверждение человеком</span></div>
          <p className="quick-win">Параллельно: включаем доступные штатные функции 1С и готовим контур клиентских компаний к обязательному e-invoicing в ОАЭ в 2027 году.</p>
        </div>
      </section>

      <section className="section" id="kpi">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">09 · МЕТРИКИ ПИЛОТА</span><h2>Успех измерим <em>заранее</em></h2><p>Пороговые значения утверждаются на Gate 1 после baseline и тестовой выборки. Замеры — еженедельно, против контрольного периода.</p></div>
          <div className="metric-grid">
            <article><strong>≥70–80%</strong><p>типовых документов создаются автоматически (STP)</p></article>
            <article><strong>≥90–95%</strong><p>критичных полей распознаны корректно</p></article>
            <article><strong>−30%+</strong><p>ручного времени на документ</p></article>
            <article><strong>≤ baseline</strong><p>ошибки после проведения — не выросли</p></article>
            <article><strong>AED / док</strong><p>стоимость обработки — в рамках бизнес-кейса</p></article>
            <article><strong>0</strong><p>критических инцидентов ИБ и учёта</p></article>
          </div>
        </div>
      </section>

      <section className="section paper" id="economy">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">10 · ЭКОНОМИКА</span><h2>Три уровня эффекта. <em>Часы ≠ деньги, пока не реализованы.</em></h2></div>
          <div className="economy-growth">
            <div><span>ГЛАВНАЯ ЭКОНОМИКА</span><strong>×2–3</strong><p>потенциал роста числа юрлиц на бухгалтера без пропорционального найма</p></div>
            <p>Ценность создаётся не сокращением команды, а ростом обслуживаемого портфеля. Освобождённые часы становятся экономическим эффектом только тогда, когда превращаются в новые клиентские компании, меньшие переработки или отказ от дополнительного найма.</p>
          </div>
          <div className="effect-levels"><article><span>УРОВЕНЬ 1</span><h3>Операционный</h3><p>Часы, скорость обработки, ошибки и возвраты.</p></article><article><span>УРОВЕНЬ 2</span><h3>Производительность</h3><p>Юрлица на бухгалтера и пропускная способность команды.</p></article><article><span>УРОВЕНЬ 3</span><h3>Реализованный</h3><p>Новые клиенты без найма, меньше переработок, управляемый рост маржи.</p></article></div>
          <p className="economy-note">Аудит фиксирует baseline на Gate 1, пилот подтверждает эффект на Gate 2. Точный ROI до измерения не обещаем.</p>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">11 · ДОРОЖНАЯ КАРТА</span><h2>Аудит, пилот, <em>масштаб</em></h2></div>
          <div className="phase-strip product-roadmap" aria-label="Этапы дорожной карты">{phases.map(([phase,time], index) => <div className={phase === "G1" || phase === "G2" ? "gate-phase" : ""} key={phase}><small>{String(index + 1).padStart(2,"0")}</small><b>{phase}</b><span>{time || "КОНТРОЛЬНАЯ ТОЧКА"}</span></div>)}</div>
          <div className="gate-grid"><article><span>GATE 1 · ПОСЛЕ 8 НЕДЕЛЬ</span><h3>Одобрение пилота</h3><p>Решение на фактических данных. При продолжении 100% стоимости аудита засчитывается в пилот.</p></article><article><span>GATE 2 · ПОСЛЕ 9 НЕДЕЛЬ ПИЛОТА</span><h3>Решение о масштабировании</h3><p>На цифрах пилота. Волны: первичка → банк и сверки → интеграции → ИИ с контролем человека.</p></article></div>
        </div>
      </section>

      <section className="section paper" id="risks">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">12 · КОНТРОЛЬ РИСКОВ</span><h2>Пять главных рисков — <em>и что с каждым делаем</em></h2></div>
          <div className="risk-list">
            <article><span>01</span><div><h3>Качество данных</h3><p>Профиль качества и ручная валидация до выбора пилота</p></div><b>контроль</b></article>
            <article><span>02</span><div><h3>Корректность учёта</h3><p>Человек подтверждает каждый документ; контрольные процедуры методолога</p></div><b>контроль</b></article>
            <article><span>03</span><div><h3>ИБ и персональные данные</h3><p>UAE PDPL, обезличивание, минимизация данных и закрытый контур при необходимости</p></div><b>контроль</b></article>
            <article><span>04</span><div><h3>Принятие сотрудниками</h3><p>Коммуникация с первого дня, добровольцы, лидеры участков в команде</p></div><b>наблюдаем</b></article>
            <article><span>05</span><div><h3>Нереализованный экономический эффект</h3><p>План роста клиентского портфеля, найма и переработок утверждается на Gate 2</p></div><b>наблюдаем</b></article>
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">13 · УПРАВЛЕНИЕ ПРОЕКТОМ</span><h2>Команда проекта, <em>роли и загрузка</em></h2></div>
          <div className="team-list">
            <article><span>01</span><div><h3>Спонсор · владелец эффекта</h3><p>Финансовый директор — решения на gates, бюджет, реализация эффекта</p></div><b>решения</b></article>
            <article><span>02</span><div><h3>Руководитель проекта · лидер изменений</h3><p>Никита Осипов — сроки, координация, коммуникации и внедрение изменений</p></div><b>~50% времени</b></article>
            <article><span>03</span><div><h3>Совладелец результата · методолог</h3><p>Главный бухгалтер — изменение процесса, корректность учёта и принятие решения</p></div><b>4–8 ч/нед</b></article>
            <article><span>04</span><div><h3>Лидеры участков</h3><p>2–3 бухгалтера — требования, тестирование, «адвокаты» проекта</p></div><b>4–8 ч/нед</b></article>
            <article><span>05</span><div><h3>ИТ / 1С + аналитик данных</h3><p>Штатный специалист и KULBATSKII — выгрузки, ETL, baseline и аналитика</p></div><b>по фазам</b></article>
            <article><span>06</span><div><h3>ИБ и юрист</h3><p>Привлекаются на Фазу 0 и приёмки — допустимость обработки данных</p></div><b>точечно</b></article>
          </div>
        </div>
      </section>

      <section className="decision" id="decision">
        <div className="wrap">
          <span className="eyebrow">РЕШЕНИЕ · СТАРТ АУДИТА</span><h2>Зафиксировать старт <em>и контур ответственности</em></h2>
          <div className="approval-grid"><div><span>01</span><p>Спонсора с правом решения</p></div><div><span>02</span><p>Бюджет аудита AED 45 000</p></div><div><span>03</span><p>Доступ к данным 1С и Excel</p></div><div><span>04</span><p>Правила данных и добровольцев</p></div><div><span>05</span><p>Бюджетный предел пилота</p></div><div><span>06</span><p>Дату Gate 1 через 8 недель</p></div></div>
          <p className="decision-copy">Продолжаете в пилот — 100% стоимости аудита засчитывается. Останавливаетесь — у Gulf Bridge остаются карта затрат, baseline и обоснованное решение.</p>
          <a className="btn primary audit-cta" href="mailto:apk181818@gmail.com?subject=Обсудить%20аудит%20стоимости%20рутины">Обсудить аудит</a>
        </div>
      </section>

      <footer><div className="wrap"><div className="brand"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ</span></div><p>Никита Осипов · Gulf Bridge · 2026</p><a href="#top">Наверх ↑</a></div></footer>
      <nav className="mobile-nav" aria-label="Быстрая навигация"><a href="#problem">Проблема</a><a href="#audit">Аудит</a><a href="#pilot">Пилот</a><a className="decision-link" href="#decision">Старт</a></nav>
    </main>
  );
}
