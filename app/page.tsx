const TechStep = ({ n, title, text, cost }: { n: string; title: string; text: string; cost: string }) => (
  <div className="tech-step">
    <span className="tech-num">{n}</span>
    <div><h3>{title}</h3>{text && <p>{text}</p>}</div>
    <small>{cost}</small>
  </div>
);

const processes = [
  ["01", "Первичка", "Счета, акты, УПД — распознавание и автосоздание в 1С"],
  ["02", "ЭДО", "Перевод контрагентов, автозагрузка документов"],
  ["03", "Банк", "Выписки, автосопоставление платежей, проводки"],
  ["04", "Сверки", "Автосверка счетов-фактур и взаиморасчётов"],
  ["05", "Требования ФНС", "Автоподбор документов, контроль сроков"],
  ["06", "Закрытие месяца", "Мониторинг недостающих документов, автопроверки"],
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
  ["АУДИТ · 2 ПАКЕТА", "ЭКСПРЕСС 3 НЕД · ПОЛНЫЙ 8 НЕД"],
  ["G1", ""], ["ПИЛОТ", "9 НЕД"], ["G2", ""],
  ["МАСШТАБИРОВАНИЕ ВОЛНАМИ", "МЕС 5–12"],
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Навигация по презентации">
        <a className="brand" href="#top"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ</span></a>
        <div className="nav-links"><a href="#audit">Аудит</a><a href="#pilot">Пилот</a><a href="#roadmap">План</a></div>
        <a className="nav-cta" href="#decision">Выбрать аудит <span>↓</span></a>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow line">АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ · ТИЗЕР ДЛЯ РУКОВОДСТВА</span>
          <div className="hero-copy">
            <h1>Сколько стоит ручная работа<br/>вашей бухгалтерии?<em>Честный ответ: неизвестно.</em></h1>
            <p className="lead">30 бухгалтеров работают в 1С, ERP, Excel и почте. Не измерено, какая доля ФОТ уходит на ввод данных, сверки, поиск документов и исправление ошибок.</p>
          </div>
          <div className="hero-evidence" aria-label="Масштаб проблемы">
            <article><strong>50–65 млн ₽</strong><span>годовой ФОТ бухгалтерии</span></article>
            <article><strong>30</strong><span>бухгалтеров в контуре</span></article>
            <article><strong>4 среды</strong><span>1С · ERP · Excel · почта</span></article>
          </div>
        </div>
      </header>

      <section className="section paper" id="problem">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">01 · ЧТО ПРОИСХОДИТ СЕЙЧАС</span><h2>Ручная работа распределена между системами — <em>и остаётся невидимой</em></h2><p>Каждый день — часы рутины. Но её объём, стоимость и влияние на рост сегодня не измерены.</p></div>
          <div className="problem-grid">
            <article><span>01</span><h3>Документы вручную</h3><p>Счета, акты, УПД, ТОРГ-12 вводятся с бумаги и сканов. Часы уходят на ввод и форматирование.</p></article>
            <article><span>02</span><h3>Труд размазан по системам</h3><p>1С, ERP, Excel, почта, ЭДО — целостной картины загрузки нет ни у кого.</p></article>
            <article><span>03</span><h3>Стоимость рутины неизвестна</h3><p>Сколько часов и рублей съедают ввод, сверки и требования ФНС — не измерено.</p></article>
            <article><span>04</span><h3>Барьер роста</h3><p>Больше документооборота — нужен больший штат. Масштабирование упирается в людей.</p></article>
          </div>
          <div className="pain-conclusion"><p>Главная проблема — не отсутствие технологии. Мы не знаем фактическую стоимость ручной работы и поэтому не можем обоснованно выбрать, что менять первым.</p><a href="#target">Перейти от неизвестности к измеримой цели <span>→</span></a></div>
        </div>
      </section>

      <section className="section" id="target">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">02 · ЦЕЛЕВАЯ КАРТИНА</span><h2>Через <em>12 месяцев</em></h2><p>Цели — диапазонами, они фиксируются после замера. Абсолютных обещаний проект не даёт.</p></div>
          <div className="target-layout">
            <div className="target-shifts">
              <article><h3>От ручного ввода — к подтверждению</h3><p>Документы создаются автоматически, человек контролирует</p></article>
              <article><h3>От поиска ошибок — к автоконтролю</h3><p>Дубли, реквизиты, недостающие закрывающие ловит система</p></article>
              <article><h3>От операций — к управляемому процессу</h3><p>Метрики по каждому участку, видимые узкие места</p></article>
              <article><h3>От оператора — к контролёру и методологу</h3><p>Роль бухгалтера меняется, люди остаются</p></article>
            </div>
            <div className="target-metrics">
              <article><strong>−25…40%</strong><p>ручного времени на рутинные операции</p></article>
              <article><strong>60–80%</strong><p>первички — сквозная автообработка (STP)</p></article>
              <article><strong>−1…3 дня</strong><p>к сроку закрытия месяца</p></article>
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
            <TechStep n="3" title="Штатные функции 1С / ERP" text="" cost="почти 0 ₽" />
            <TechStep n="4" title="API и интеграции" text="" cost="разово" />
            <TechStep n="5" title="Распознавание документов (OCR)" text="" cost="подписка" />
            <TechStep n="6" title="Workflow / маршруты" text="" cost="по месту" />
            <TechStep n="7" title="RPA-роботы" text="" cost="посл. слой" />
            <TechStep n="8" title="ИИ-ассистенты" text="" cost="упр. риск" />
          </div>
          <p className="privacy-note"><b>RPA</b> — последний интеграционный слой, а не первый способ. <b>ИИ</b> — управляемый риск: без права проводить документы, платить и отвечать ФНС без человека.</p>
        </div>
      </section>

      <section className="section paper" id="measure">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">05 · КАК ИЗМЕРЯЕМ ТЕКУЩУЮ РАБОТУ</span><h2>Три источника данных. <em>Смотрим процессы, а не людей.</em></h2></div>
          <div className="source-grid">
            <article><span>ОСНОВНОЙ</span><h3>Журналы 1С и ERP</h3><p>Кто, когда, какой документ создал и провёл — за 3 месяца по всем 30 бухгалтерам. ETL → event log → process mining (PM4Py, open source).</p></article>
            <article><span>КОНТЕКСТ</span><h3>Интервью и наблюдение</h3><p>Валидация цифр людьми по участкам: первичка, банк, сверки, требования, закрытие.</p></article>
            <article><span>ОГРАНИЧЕННО</span><h3>Task mining</h3><p>5–7 добровольцев, 2 недели — только там, где логи не видят работу (Excel, почта, бумага).</p></article>
          </div>
          <div className="data-rules"><span>обезличивание до аналитики</span><span>без содержимого документов</span><span>срок удаления сырых данных</span><span>не для оценки сотрудников</span><span>152-ФЗ · ТК РФ</span></div>
        </div>
      </section>

      <section className="section" id="selection">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">06 · КАК ВЫБИРАЕТСЯ ПИЛОТ</span><h2>Пилот выбирают <em>данные, а не мнения.</em></h2></div>
          <div className="selection-grid">
            <div className="weights">{weights.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
            <div className="method-card"><span>МЕТОД</span><p>Каждый процесс из карты оценивается по 10-балльной шкале с весами. Побеждает лучшее соотношение <b>эффект × простота × низкий риск.</b></p><p>Первым пилотом не берём: закрытие месяца целиком, ответы ФНС с генеративным ИИ, процессы с массой исключений или в момент оргизменений.</p></div>
          </div>
        </div>
      </section>

      <section className="section audit-product" id="audit">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">07 · ПРОДУКТ</span><h2>Аудит стоимости <em>рутины</em></h2><p>Покупаете не «обследование», а цифру и решение: сколько рублей в год стоит ручная работа, какие процессы менять первыми и как обосновать пилот.</p></div>
          <div className="audit-outcomes">
            <article><span>01</span><h3>Цифра</h3><p>Стоимость рутины в ₽/год — по процессам и участкам</p></article>
            <article><span>02</span><h3>Приоритеты</h3><p>Какие 2–3 процесса автоматизировать первыми — матрица с весами</p></article>
            <article><span>03</span><h3>Решение</h3><p>Инструмент, тарифы вендоров, критерии успеха и план пилота</p></article>
          </div>
          <div className="audit-packages">
            <article className="audit-package">
              <div className="package-head"><span>ЭКСПРЕСС</span><b>3 недели</b></div>
              <strong>190 000 ₽</strong>
              <ul><li>Журналы 1С / ERP + 5 интервью</li><li>Топ-3 процесса по потенциалу</li><li>Ориентировочная стоимость рутины</li><li>Рекомендация процесса для пилота</li></ul>
              <a href="#decision">Выбрать Экспресс <span>→</span></a>
            </article>
            <article className="audit-package featured">
              <div className="package-head"><span>ПОЛНЫЙ</span><b>8 недель</b></div>
              <strong>490 000 ₽</strong>
              <ul><li>Журналы + task mining + интервью по всем участкам</li><li>Топ-10 процессов с точной стоимостью и baseline KPI</li><li>Финмодель, TCO и план монетизации эффекта</li><li>Обоснование пилота и защита перед руководством</li></ul>
              <a href="#decision">Выбрать Полный <span>→</span></a>
            </article>
          </div>
          <p className="audit-price-note">Для компании с ФОТ бухгалтерии 50–65 млн ₽/год Полный аудит — менее 1% годового ФОТ. Цены — стартовый ориентир для команды примерно из 30 бухгалтеров и уточняются после числа юрлиц и объёмов операций.</p>
          <div className="audit-credit"><div><span>ЗАЧЁТ В ПИЛОТ</span><strong>100%</strong><small>при продолжении в течение 3 месяцев</small></div><div><h3>Продолжаете — аудит бесплатен.</h3><p>Вся стоимость аудита зачитывается в пилот. Останавливаетесь — у вас остаются карта затрат, baseline и обоснованное решение, которые ценны сами по себе.</p></div></div>
          <p className="audit-limit"><b>Не входит:</b> внедрение, изменение конфигураций 1С и лицензии вендоров. Аудит не обещает величину эффекта — он её измеряет.</p>
        </div>
      </section>

      <section className="section paper" id="pilot">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">08 · РЕКОМЕНДУЕМЫЙ ПИЛОТ</span><h2>Предварительный <em>кандидат</em></h2></div>
          <div className="candidate-grid pilot-candidates">
            <article className="primary-candidate"><span>ОСНОВНОЙ КАНДИДАТ</span><h3>Ввод первички + ЭДО</h3><p>Самый массовый ручной труд: большой поток, повторяемые типы документов, измеримый результат. Публичный кейс: ввод 50 счетов — с 2,5–4 часов до ~25 минут.</p><strong>2,5–4 ч <i>→</i> ~25 мин</strong></article>
            <article className="reserve-candidate"><span>РЕЗЕРВНЫЙ КАНДИДАТ</span><h3>Банк или сверки</h3><p>Ежедневный объём и стабильные правила сопоставления. Окончательный выбор — только по данным обследования.</p></article>
          </div>
          <div className="pilot-scope" aria-label="Контур пилота"><span><b>1</b> процесс</span><span><b>1</b> участок</span><span><b>3–5</b> бухгалтеров</span><span><b>9</b> недель</span><span>полное закрытие месяца</span><span>подтверждение человеком</span></div>
          <p className="quick-win">Параллельно и без бюджета пилота: перевод контрагентов на ЭДО и включение бесплатных штатных сервисов 1С — сверка, DirectBank, интерфейс требований ФНС.</p>
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
            <article><strong>₽ / док</strong><p>стоимость обработки — в рамках бизнес-кейса</p></article>
            <article><strong>0</strong><p>критических инцидентов ИБ и учёта</p></article>
          </div>
        </div>
      </section>

      <section className="section paper" id="economy">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">10 · ЭКОНОМИКА</span><h2>Три уровня эффекта. <em>Часы ≠ деньги, пока не реализованы.</em></h2></div>
          <div className="economy-layout">
            <div className="economy-table-wrap"><table className="economy-table"><thead><tr><th>Сценарий</th><th>Снижение рутины</th><th>Доля</th><th>FTE-экв.</th><th>Мощность / год</th></tr></thead><tbody><tr><td data-label="Сценарий">Консервативный</td><td data-label="Снижение рутины">25%</td><td data-label="Доля">25%</td><td data-label="FTE-экв.">1,3</td><td data-label="Мощность / год">2,4 млн ₽</td></tr><tr className="base-scenario"><td data-label="Сценарий">Базовый <span>рабочий ориентир</span></td><td data-label="Снижение рутины">40%</td><td data-label="Доля">35%</td><td data-label="FTE-экв.">3,4</td><td data-label="Мощность / год">6,0 млн ₽</td></tr><tr><td data-label="Сценарий">Высокий</td><td data-label="Снижение рутины">55%</td><td data-label="Доля">45%</td><td data-label="FTE-экв.">6,7</td><td data-label="Мощность / год">12,0 млн ₽</td></tr></tbody></table><p>Иллюстрация чувствительности при полной стоимости сотрудника 150 тыс. ₽/мес. Не прогноз: пересчитывается на данных обследования (Gate 1) и пилота (Gate 2).</p></div>
            <div className="effect-levels"><article><span>УРОВЕНЬ 1</span><h3>Операционный</h3><p>часы, скорость, ошибки</p></article><article><span>УРОВЕНЬ 2</span><h3>Мощность</h3><p>FTE-эквивалент высвобожденного времени</p></article><article><span>УРОВЕНЬ 3</span><h3>Реализованный</h3><p>найм, переработки, потери. При монетизации 50%: базовый ≈ 3,0 млн ₽/год</p></article></div>
          </div>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">11 · ДОРОЖНАЯ КАРТА</span><h2>Аудит, пилот, <em>масштаб</em></h2></div>
          <div className="phase-strip product-roadmap" aria-label="Этапы дорожной карты">{phases.map(([phase,time], index) => <div className={phase === "G1" || phase === "G2" ? "gate-phase" : ""} key={phase}><small>{String(index + 1).padStart(2,"0")}</small><b>{phase}</b><span>{time || "КОНТРОЛЬНАЯ ТОЧКА"}</span></div>)}</div>
          <div className="gate-grid"><article><span>GATE 1 · ПОСЛЕ АУДИТА</span><h3>Одобрение пилота</h3><p>Решение на фактических данных. При старте пилота в течение 3 месяцев 100% стоимости аудита зачитывается.</p></article><article><span>GATE 2 · ПОСЛЕ ПИЛОТА</span><h3>Решение о масштабировании</h3><p>На цифрах пилота. Волны: первичка → банк/сверки → RPA → ИИ.</p></article></div>
        </div>
      </section>

      <section className="section paper" id="risks">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">12 · КОНТРОЛЬ РИСКОВ</span><h2>Пять главных рисков — <em>и что с каждым делаем</em></h2></div>
          <div className="risk-list">
            <article><span>01</span><div><h3>Качество данных</h3><p>Профиль качества и ручная валидация до выбора пилота</p></div><b>контроль</b></article>
            <article><span>02</span><div><h3>Корректность учёта</h3><p>Человек подтверждает каждый документ; контрольные процедуры методолога</p></div><b>контроль</b></article>
            <article><span>03</span><div><h3>ИБ и персональные данные</h3><p>Обезличивание, проверка вендоров на 152-ФЗ, закрытый контур при необходимости</p></div><b>контроль</b></article>
            <article><span>04</span><div><h3>Принятие сотрудниками</h3><p>Коммуникация с первого дня, добровольцы, лидеры участков в команде</p></div><b>наблюдаем</b></article>
            <article><span>05</span><div><h3>Нереализованный экономический эффект</h3><p>План монетизации (найм, переработки, перераспределение) утверждается на Gate 2</p></div><b>наблюдаем</b></article>
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">13 · УПРАВЛЕНИЕ ПРОЕКТОМ</span><h2>Команда проекта, <em>роли и загрузка</em></h2></div>
          <div className="team-list">
            <article><span>01</span><div><h3>Спонсор · владелец эффекта</h3><p>Финансовый директор — решения на gates, бюджет, реализация эффекта</p></div><b>решения</b></article>
            <article><span>02</span><div><h3>Руководитель проекта · лидер изменений</h3><p>Никита — сроки, координация, коммуникации, adoption</p></div><b>~50% времени</b></article>
            <article><span>03</span><div><h3>Владелец процесса · методолог</h3><p>Главный бухгалтер — изменение процесса и корректность учёта</p></div><b>4–8 ч/нед</b></article>
            <article><span>04</span><div><h3>Лидеры участков</h3><p>2–3 бухгалтера — требования, тестирование, «адвокаты» проекта</p></div><b>4–8 ч/нед</b></article>
            <article><span>05</span><div><h3>ИТ / 1С + аналитик данных</h3><p>Штатный специалист и партнёр — выгрузки, ETL, baseline, интеграции</p></div><b>по фазам</b></article>
            <article><span>06</span><div><h3>ИБ и юрист</h3><p>Привлекаются на Фазу 0 и приёмки — допустимость обработки данных</p></div><b>точечно</b></article>
          </div>
        </div>
      </section>

      <section className="decision" id="decision">
        <div className="wrap">
          <span className="eyebrow">РЕШЕНИЕ · СТАРТ АУДИТА</span><h2>Выбрать пакет <em>и зафиксировать контур</em></h2>
          <div className="approval-grid"><div><span>01</span><p>Пакет: Экспресс или Полный</p></div><div><span>02</span><p>Число юрлиц и объём операций</p></div><div><span>03</span><p>Доступ к журналам 1С и ERP</p></div><div><span>04</span><p>Правила работы с персональными данными</p></div><div><span>05</span><p>Спонсора и рабочую группу</p></div><div><span>06</span><p>Дату старта и Gate 1</p></div></div>
          <p className="decision-copy">Продолжаете в пилот в течение 3 месяцев — 100% стоимости аудита зачитывается. Останавливаетесь — купили карту своих затрат, baseline и обоснованное решение.</p>
          <a className="btn primary audit-cta" href="mailto:apk181818@gmail.com?subject=Обсудить%20аудит%20стоимости%20рутины">Обсудить аудит</a>
        </div>
      </section>

      <footer><div className="wrap"><div className="brand"><strong>KULBATSKII</strong><span>АВТОМАТИЗАЦИЯ БУХГАЛТЕРИИ</span></div><p>Никита · бизнес-менеджмент · 2026</p><a href="#top">Наверх ↑</a></div></footer>
      <nav className="mobile-nav" aria-label="Быстрая навигация"><a href="#problem">Проблема</a><a href="#audit">Аудит</a><a href="#pilot">Пилот</a><a className="decision-link" href="#decision">Старт</a></nav>
    </main>
  );
}
