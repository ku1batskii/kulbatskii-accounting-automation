const TechStep = ({ n, title, cost }: { n: string; title: string; cost: string }) => (
  <div className="tech-step">
    <span className="tech-num">{n}</span>
    <div><h3>{title}</h3></div>
    <small>{cost}</small>
  </div>
);

const FlowArrow = ({ label }: { label?: string }) => <div className="flow-arrow" aria-hidden="true"><span>{label}</span></div>;

const processes = [
  ["01", "Первичка", "Счета, акты, УПД — распознавание и автосоздание в 1С"],
  ["02", "ЭДО", "Перевод контрагентов, автозагрузка документов"],
  ["03", "Банк", "Выписки, автосопоставление платежей, проводки"],
  ["04", "Сверки", "Автосверка счетов-фактур и взаиморасчётов"],
  ["05", "Требования ФНС", "Автоподбор документов, контроль сроков"],
  ["06", "Закрытие месяца", "Мониторинг недостающих документов, автопроверки"],
];

const weights = [
  ["20%", "Объём операций"], ["20%", "Трудоёмкость"],
  ["15%", "Стандартизированность правил"], ["10%", "Качество исходных данных"],
  ["10%", "Измеримость эффекта"], ["10%", "Стабильность процесса"],
  ["15%", "Риск · интеграция · владелец"],
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Навигация по презентации">
        <a className="brand" href="#top"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ</span></a>
        <div className="nav-links"><a href="#problem">Проблема</a><a href="#pilot">Пилот</a><a href="#roadmap">План</a></div>
        <a className="nav-cta" href="#decision">Что утвердить <span>↓</span></a>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow line">АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ · 1С + ERP · 2026</span>
          <h1>Сначала доказать эффект.<br/><em>Потом масштабировать.</em></h1>
          <p className="lead">Берём один участок с ручной рутиной, измеряем стоимость в часах и деньгах, проверяем на коротком пилоте — и только затем разворачиваем на всю бухгалтерию.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#decision">Что просим утвердить сегодня</a>
            <a className="btn text" href="#problem">Где теряется время <span>↓</span></a>
          </div>
          <div className="proof-grid">
            <div><strong>30</strong><span>бухгалтеров</span></div>
            <div><strong>Пилот</strong><span>за 9 недель</span></div>
            <div><strong>2</strong><span>контрольные<br/>точки</span></div>
            <div><strong>Измеримый</strong><span>ROI</span></div>
          </div>
        </div>
      </header>

      <section className="section paper" id="problem">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">01 · ПРОБЛЕМА</span><h2>Где теряется время <em>ваших бухгалтеров</em></h2><p>Каждый день — часы ручной рутины, стоимость которой сегодня никто не измеряет.</p></div>
          <div className="problem-grid editorial-cards">
            <article><span>01</span><h3>Документы вручную</h3><p>Счета, акты, УПД, ТОРГ-12 вводятся с бумаги и сканов. Часы уходят на ввод и форматирование.</p></article>
            <article><span>02</span><h3>Труд размазан по системам</h3><p>1С, ERP, Excel, почта, ЭДО — целостной картины загрузки нет ни у кого.</p></article>
            <article><span>03</span><h3>Стоимость рутины неизвестна</h3><p>Сколько часов и рублей съедают ввод, сверки и требования ФНС — не измерено.</p></article>
            <article><span>04</span><h3>Барьер роста</h3><p>Больше документооборота — нужен больший штат. Масштабирование упирается в людей.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="target">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">02 · ЦЕЛЕВАЯ КАРТИНА</span><h2>Через <em>12 месяцев</em></h2><p>Цели — диапазонами, они фиксируются после замера. Абсолютных обещаний проект не даёт.</p></div>
          <div className="transformation-flow">
            <article><span>01</span><h3>От ручного ввода — к подтверждению</h3><p>Документы создаются автоматически, человек контролирует</p></article>
            <article><span>02</span><h3>От поиска ошибок — к автоконтролю</h3><p>Дубли, реквизиты, недостающие закрывающие ловит система</p></article>
            <article><span>03</span><h3>От операций — к управляемому процессу</h3><p>Метрики по каждому участку, видимые узкие места</p></article>
            <article><span>04</span><h3>От оператора — к контролёру и методологу</h3><p>Роль бухгалтера меняется, люди остаются</p></article>
          </div>
          <div className="target-grid">
            <article><strong>−25…40%</strong><p>ручного времени на рутинные операции</p></article>
            <article><strong>60–80%</strong><p>первички — сквозная автообработка (STP)</p></article>
            <article><strong>−1…3 дня</strong><p>к сроку закрытия месяца</p></article>
          </div>
        </div>
      </section>

      <section className="section paper" id="scope">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">03 · ОБЪЁМ</span><h2>Карта <em>рутинных процессов</em></h2><p>Девять участков рутины. Автоматизируем не «бухгалтерию вообще», а конкретные из них — по данным.</p></div>
          <div className="routine-grid editorial-cards">
            {processes.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="logic">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">04 · ПРИНЦИП ВЫБОРА РЕШЕНИЯ</span><h2>Иерархия способов. <em>Технология — последний ответ.</em></h2></div>
          <div className="tech-ladder">
            <TechStep n="01" title="Устранить операцию" cost="бесплатно" />
            <TechStep n="02" title="Стандартизировать процесс" cost="бесплатно" />
            <TechStep n="03" title="Штатные функции 1С / ERP" cost="почти 0 ₽" />
            <TechStep n="04" title="API и интеграции" cost="разово" />
            <TechStep n="05" title="Распознавание документов (OCR)" cost="подписка" />
            <TechStep n="06" title="Workflow / маршруты" cost="по месту" />
            <TechStep n="07" title="RPA-роботы" cost="посл. слой" />
            <TechStep n="08" title="ИИ-ассистенты" cost="упр. риск" />
          </div>
          <p className="privacy-note"><b>RPA</b> — последний интеграционный слой, а не первый способ. <b>ИИ</b> — управляемый риск: без права проводить документы, платить и отвечать ФНС без человека.</p>
        </div>
      </section>

      <section className="section paper" id="measure">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">05 · КАК ИЗМЕРЯЕМ ТЕКУЩУЮ РАБОТУ</span><h2>Три источника данных. <em>Смотрим процессы, а не людей.</em></h2></div>
          <div className="measure-flow source-flow">
            <div><span>01 · ОСНОВНОЙ</span><h3>Журналы 1С и ERP</h3><p>Кто, когда, какой документ создал и провёл — за 3 месяца по всем 30 бухгалтерам. ETL → event log → process mining (PM4Py, open source).</p></div>
            <FlowArrow label="масштаб" />
            <div className="result"><span>02 · КОНТЕКСТ</span><h3>Интервью и наблюдение</h3><p>Валидация цифр людьми по участкам: первичка, банк, сверки, требования, закрытие.</p></div>
            <FlowArrow label="причины" />
            <div><span>03 · ОГРАНИЧЕННО</span><h3>Task mining</h3><p>5–7 добровольцев, 2 недели — только там, где логи не видят работу (Excel, почта, бумага).</p></div>
          </div>
          <div className="data-rules"><span>обезличивание до аналитики</span><span>без содержимого документов</span><span>срок удаления сырых данных</span><span>не для оценки сотрудников</span><span>152-ФЗ · ТК РФ</span></div>
        </div>
      </section>

      <section className="section" id="selection">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">06 · КАК ВЫБИРАЕТСЯ ПИЛОТ</span><h2>Пилот выбирают <em>данные, а не мнения.</em></h2></div>
          <div className="pilot-layout selection-panel">
            <div className="pilot-main">
              <div className="badge">МЕТОД · 10-БАЛЛЬНАЯ ШКАЛА</div>
              <h3>Эффект × простота × низкий риск</h3>
              <p>Каждый процесс из карты оценивается по 10-балльной шкале с весами. Побеждает лучшее соотношение эффект × простота × низкий риск.</p>
              <div className="exclusion-note">Первым пилотом не берём: закрытие месяца целиком, ответы ФНС с генеративным ИИ, процессы с массой исключений или в момент оргизменений.</div>
            </div>
            <div className="criteria-list weight-list">
              {weights.map(([value,label], index) => <div key={label}><span>{String(index + 1).padStart(2,"0")}</span><p><b>{label}</b><small>{value} веса</small></p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section paper" id="pilot">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">07 · РЕКОМЕНДУЕМЫЙ ПИЛОТ</span><h2>Предварительный <em>кандидат</em></h2></div>
          <div className="pilot-layout">
            <div className="pilot-main">
              <div className="badge">ОСНОВНОЙ</div>
              <h3>Ввод первички + ЭДО</h3>
              <p>Самый массовый ручной труд: большой поток, повторяемые типы документов, измеримый результат. Публичный кейс: ввод 50 счетов — с 2,5–4 часов до ~25 минут.</p>
              <div className="mini-flow"><div><b>1 процесс</b><span>контур</span></div><i>→</i><div><b>1 участок</b><span>фокус</span></div><i>→</i><div><b>3–5</b><span>бухгалтеров</span></div><i>→</i><div><b>9 недель</b><span>пилот</span></div></div>
            </div>
            <div className="criteria-list pilot-reserve">
              <div><span>02</span><p><b>Банк или сверки</b><small>резервный кандидат</small></p></div>
              <div><span>✓</span><p><b>Полное закрытие месяца</b><small>охватывает пилот</small></p></div>
              <div><span>✓</span><p><b>Подтверждение человеком</b><small>для каждого документа</small></p></div>
            </div>
          </div>
          <div className="pilot-alt"><span>РЕЗЕРВНЫЙ КАНДИДАТ</span><b>Ежедневный объём и стабильные правила сопоставления.</b><small>Окончательный выбор — только по данным обследования.</small></div>
          <p className="quick-win">Параллельно и без бюджета пилота: перевод контрагентов на ЭДО и включение бесплатных штатных сервисов 1С — сверка, DirectBank, интерфейс требований ФНС.</p>
        </div>
      </section>

      <section className="section" id="kpi">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">08 · МЕТРИКИ ПИЛОТА</span><h2>Успех измерим <em>заранее</em></h2><p>Пороговые значения утверждаются на Gate 1 после baseline и тестовой выборки. Замеры — еженедельно, против контрольного периода.</p></div>
          <div className="kpi-grid kpi-six">
            <article><span>01</span><h3>Автоматизация</h3><strong>≥70–80%</strong><p>типовых документов создаются автоматически (STP)</p></article>
            <article><span>02</span><h3>Точность</h3><strong>≥90–95%</strong><p>критичных полей распознаны корректно</p></article>
            <article><span>03</span><h3>Время</h3><strong>−30%+</strong><p>ручного времени на документ</p></article>
            <article><span>04</span><h3>Ошибки</h3><strong>≤ baseline</strong><p>ошибки после проведения — не выросли</p></article>
            <article><span>05</span><h3>Экономика</h3><strong>₽ / док</strong><p>стоимость обработки — в рамках бизнес-кейса</p></article>
            <article><span>06</span><h3>Безопасность</h3><strong>0</strong><p>критических инцидентов ИБ и учёта</p></article>
          </div>
        </div>
      </section>

      <section className="section economy" id="economy">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">09 · ЭКОНОМИКА</span><h2>Три уровня эффекта. <em>Часы ≠ деньги, пока не реализованы.</em></h2></div>
          <div className="formula"><span>ТРИ УРОВНЯ</span><b>операционный<br/><small>часы · скорость · ошибки</small></b><i>→</i><b>мощность<br/><small>FTE-эквивалент</small></b><i>→</i><b>реализованный<br/><small>найм · переработки · потери</small></b></div>
          <div className="scenario-grid">
            <article><span>КОНСЕРВАТИВНЫЙ · 25% / 25%</span><strong>1,3 FTE</strong><p>2,4 млн ₽ мощности / год</p></article>
            <article className="featured"><span>БАЗОВЫЙ · 40% / 35%</span><strong>3,4 FTE</strong><p>6,0 млн ₽ мощности / год</p><small>При монетизации 50%: ≈ 3,0 млн ₽/год</small></article>
            <article><span>ВЫСОКИЙ · 55% / 45%</span><strong>6,7 FTE</strong><p>12,0 млн ₽ мощности / год</p></article>
          </div>
          <p className="caveat dark">Иллюстрация чувствительности при полной стоимости сотрудника 150 тыс. ₽/мес. Не прогноз: пересчитывается на данных обследования (Gate 1) и пилота (Gate 2).</p>
        </div>
      </section>

      <section className="section paper" id="roadmap">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">10 · ДОРОЖНАЯ КАРТА</span><h2>12 месяцев, <em>два решения</em></h2></div>
          <div className="timeline">
            <article><div className="time"><span>НЕД 1–2</span><b>Ф0</b></div><div><h3>Фаза 0</h3></div></article>
            <article><div className="time"><span>НЕД 2–7</span><b>Ф1</b></div><div><h3>Baseline</h3></div></article>
            <article><div className="time"><span>НЕД 7–9</span><b>Ф2</b></div><div><h3>Подготовка решения</h3></div></article>
            <article className="gate"><div className="time"><span>КОНЕЦ 9-Й НЕДЕЛИ</span><b>G1</b></div><div><h3>Одобрение пилота</h3><p>На фактических данных обследования. До этой точки внешние расходы ≈ 0.</p></div></article>
            <article><div className="time"><span>НЕД 10–18</span><b>Ф3</b></div><div><h3>Пилот</h3></div></article>
            <article><div className="time"><span>НЕД 18–20</span><b>Ф4</b></div><div><h3>Оценка результата</h3></div></article>
            <article className="gate"><div className="time"><span>СЕРЕДИНА 5-ГО МЕСЯЦА</span><b>G2</b></div><div><h3>Решение о масштабировании</h3><p>На цифрах пилота.</p></div></article>
            <article><div className="time"><span>МЕС 5–12</span><b>Ф5</b></div><div><h3>Масштабирование волнами</h3><p>Первичка → банк/сверки → RPA → ИИ.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section" id="risks">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">11 · КОНТРОЛЬ РИСКОВ</span><h2>Пять главных рисков — <em>и что с каждым делаем</em></h2></div>
          <div className="risk-grid">
            <details open><summary><span>01</span>Качество данных</summary><p>Профиль качества и ручная валидация до выбора пилота</p></details>
            <details><summary><span>02</span>Корректность учёта</summary><p>Человек подтверждает каждый документ; контрольные процедуры методолога</p></details>
            <details><summary><span>03</span>ИБ и персональные данные</summary><p>Обезличивание, проверка вендоров на 152-ФЗ, закрытый контур при необходимости</p></details>
            <details><summary><span>04</span>Принятие сотрудниками</summary><p>Коммуникация с первого дня, добровольцы, лидеры участков в команде</p></details>
            <details><summary><span>05</span>Нереализованный экономический эффект</summary><p>План монетизации (найм, переработки, перераспределение) утверждается на Gate 2</p></details>
          </div>
        </div>
      </section>

      <section className="section paper" id="team">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">12 · УПРАВЛЕНИЕ ПРОЕКТОМ</span><h2>Команда проекта, <em>роли и загрузка</em></h2></div>
          <div className="roles roles-six">
            <div><span>СПОНСОР · ВЛАДЕЛЕЦ ЭФФЕКТА</span><h3>Финансовый директор</h3><p>Решения на gates, бюджет, реализация эффекта · решения</p></div>
            <div className="core"><span>РУКОВОДИТЕЛЬ ПРОЕКТА · ЛИДЕР ИЗМЕНЕНИЙ</span><h3>Никита</h3><p>Сроки, координация, коммуникации, adoption · ~50% времени</p></div>
            <div><span>ВЛАДЕЛЕЦ ПРОЦЕССА · МЕТОДОЛОГ</span><h3>Главный бухгалтер</h3><p>Изменение процесса и корректность учёта · 4–8 ч/нед</p></div>
            <div><span>ЛИДЕРЫ УЧАСТКОВ</span><h3>2–3 бухгалтера</h3><p>Требования, тестирование, «адвокаты» проекта · 4–8 ч/нед</p></div>
            <div><span>ИТ / 1С + АНАЛИТИК ДАННЫХ</span><h3>Штатный специалист и партнёр</h3><p>Выгрузки, ETL, baseline, интеграции · по фазам</p></div>
            <div><span>ИБ И ЮРИСТ</span><h3>Контроль допустимости</h3><p>Привлекаются на Фазу 0 и приёмки — допустимость обработки данных · точечно</p></div>
          </div>
        </div>
      </section>

      <section className="decision" id="decision">
        <div className="wrap decision-grid">
          <div><span className="eyebrow">РЕШЕНИЕ · GATE 1</span><h2>Что просим утвердить <em>сегодня</em></h2><p>Мы не предлагаем верить усреднённым кейсам. Мы предлагаем за два месяца измерить фактическую стоимость рутины и проверить один процесс на пилоте — и только после подтверждения результата говорить о полном бюджете.</p></div>
          <div className="decision-card"><span>УТВЕРДИТЬ СЕЙЧАС</span><ol><li>Мандат проекта и рабочую группу</li><li>Доступ к данным 1С и ERP</li><li>Правила работы с персональными данными</li><li>Срок обследования — 9 недель</li><li>Лимит бюджета пилота</li><li>Дату Gate 1 в календаре руководства</li></ol></div>
        </div>
      </section>

      <footer><div className="wrap"><div className="brand"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ</span></div><p>Никита · бизнес-менеджмент · 2026</p><a href="#top">Наверх ↑</a></div></footer>
      <nav className="mobile-nav" aria-label="Быстрая навигация"><a href="#problem">Проблема</a><a href="#pilot">Пилот</a><a href="#roadmap">План</a><a className="decision-link" href="#decision">Gate 1</a></nav>
    </main>
  );
}
