const auditSteps = [
  ["01", "Что исследуем?", "Согласуем процессы, владельцев, определения показателей и доступ к данным.", "Единый контур аудита"],
  ["02", "Как работа выполняется фактически?", "Изучаем журналы 1С, проводим интервью и наблюдаем действия вне системы только с добровольцами.", "Подтверждённая картина текущей работы"],
  ["03", "Где возникает ручная нагрузка?", "Связываем операции, ожидания, возвраты и исправления в единый маршрут процесса.", "Фактическая карта ручных переходов"],
  ["04", "Что сильнее всего влияет на маржу?", "Сопоставляем объёмы, время, ошибки и повторную работу.", "Стоимость рутины в AED по процессам"],
  ["05", "Что имеет смысл менять первым?", "Сравниваем потенциальный эффект, сложность, качество данных и риск.", "Кандидат и критерии проверки"],
];

const processes = [
  ["01", "Первичные документы", "инвойсы · счета · акты"],
  ["02", "E-invoicing", "клиентский контур"],
  ["03", "Банк", "выписки · платежи · проводки"],
  ["04", "Сверки", "инвойсы · взаиморасчёты"],
  ["05", "Запросы FTA", "документы · сроки ответа"],
  ["06", "VAT и закрытие", "контроль · отчётность"],
];

const pilotMetrics = ["Время на документ", "Операции без ручного ввода", "Точность критичных полей", "Возвраты и ошибки", "Стоимость обработки", "Критические инциденты"];
const controls = ["UAE PDPL", "Обезличивание", "Без содержимого документов", "Только добровольцы", "Подтверждение человеком", "ИИ не действует самостоятельно"];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Навигация по презентации">
        <a className="brand" href="#top"><strong>KULBATSKII</strong><span>GULF BRIDGE</span></a>
        <div className="nav-links"><a href="#offer">Аудит</a><a href="#route">Маршрут</a><a href="#pilot">Пилот</a><a href="#economy">Экономика</a></div>
        <a className="nav-cta" href="#decision">Зафиксировать старт <span>↓</span></a>
      </nav>

      <header className="hero screen" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow line">АУДИТ СТОИМОСТИ РУЧНЫХ ОПЕРАЦИЙ</span>
          <div className="hero-statement">
            <h1>Рост всё сильнее зависит<br/>от ручной работы.<em>Её влияние на процессы пока не измерено.</em></h1>
            <p>30 бухгалтеров ведут 300+ клиентских компаний. До выбора автоматизации важно определить стоимость ручных операций и процесс, изменение которого даст наиболее обоснованный результат.</p>
          </div>
          <div className="hero-close"><strong>Сначала измерить.<br/>Затем решить.</strong><a className="btn primary" href="#current">Получить точный ответ <span>↓</span></a></div>
        </div>
      </header>

      <section className="section paper screen current" id="current">
        <div className="wrap split-stage">
          <div className="section-head"><span className="eyebrow">01 · ТЕКУЩИЙ КОНТУР</span><h2>Операции распределены<br/><em>между системами и людьми.</em></h2><p className="head-note">Их совокупная стоимость пока не выделена.</p></div>
          <div className="current-map">
            <div className="system-chain"><span>1С</span><i>→</i><span>Excel</span><i>→</i><span>Почта</span><i>→</i><span>Ручное согласование</span></div>
            <div className="current-facts">
              <article><span>01</span><h3>Работа выходит за пределы системы</h3><p>Часть маршрута не видна в журналах и существует только в действиях сотрудников.</p></article>
              <article><span>02</span><h3>Повторная работа не выделена</h3><p>Возвраты, поиск, исправления и ожидание не имеют отдельного ценника.</p></article>
              <article><span>03</span><h3>Нагрузка зависит от людей</h3><p>Знания о нестандартных ситуациях остаются у отдельных специалистов.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section screen urgency" id="urgency">
        <div className="wrap urgency-layout">
          <span className="year">2027</span>
          <div><span className="eyebrow">02 · ПОЧЕМУ СЕЙЧАС</span><h2>E-invoicing становится обязательным в ОАЭ.</h2><p>Мандат затронет каждую клиентскую компанию. Войти в новый контур лучше с измеримыми процессами, а не с набором разрозненных автоматизаций.</p><a href="#offer">Определить готовность контура <span>→</span></a></div>
        </div>
      </section>

      <section className="section screen offer" id="offer">
        <div className="wrap">
          <span className="eyebrow">03 · ПРЕДЛОЖЕНИЕ</span>
          <div className="offer-title"><h2>Аудит за <em>AED 45 000</em><br/>создаёт основу для решения.</h2><p>8 недель · фиксированный контур · результат пригоден для решения руководства</p></div>
          <div className="offer-results">
            <article><span>01</span><h3>Стоимость</h3><p>Сколько AED в год поглощают ручные операции.</p></article>
            <article><span>02</span><h3>Приоритет</h3><p>Какой процесс имеет лучшее соотношение эффекта, сложности и риска.</p></article>
            <article><span>03</span><h3>Решение</h3><p>Стоит ли запускать пилот и по каким показателям его принимать.</p></article>
          </div>
          <div className="credit-statement"><p>При запуске пилота <strong>AED 45 000 полностью входят в его бюджет.</strong></p><b>Продолжение становится отдельным решением, основанным на результатах аудита.</b></div>
        </div>
      </section>

      <section className="section paper screen scope" id="scope">
        <div className="wrap">
          <div className="section-head wide"><span className="eyebrow">04 · ОХВАТ</span><h2>Контур охватывает<br/><em>шесть измеримых участков.</em></h2></div>
          <div className="process-contour">{processes.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <p className="scope-note">Пилот выбирается из этого контура после измерения. Самый заметный процесс не обязательно окажется самым значимым.</p>
        </div>
      </section>

      <section className="section paper screen route-section" id="route">
        <div className="wrap">
          <div className="section-head route-head"><span className="eyebrow">05 · МАРШРУТ АУДИТА</span><h2>Пять шагов<br/><em>от предположений к цифре.</em></h2></div>
          <div className="audit-route" aria-label="Пять шагов аудита">
            {auditSteps.map(([n,title,action,result]) => <article className="route-card" key={n}><span className="route-number">{n}</span><h3>{title}</h3><p>{action}</p><div><small>НА ВЫХОДЕ</small><strong>{result}</strong></div></article>)}
          </div>
          <div className="solution-order"><span>ПРИНЦИП ВЫБОРА РЕШЕНИЯ</span><p>Устранить операцию → стандартизировать → использовать штатные функции → интегрировать → автоматизировать.</p><b>ИИ и RPA рассматриваются после более простых вариантов.</b></div>
        </div>
      </section>

      <section className="section screen fork" id="fork">
        <div className="wrap">
          <div className="section-head wide"><span className="eyebrow">06 · РЕШЕНИЕ ПОСЛЕ АУДИТА</span><h2>Оба исхода<br/><em>сохраняют ценность.</em></h2></div>
          <div className="fork-grid">
            <article><span>01</span><h3>Завершить этап</h3><p>Карта затрат, исходные показатели и заключение остаются у Gulf Bridge.</p><b>Работу можно завершить на результатах аудита.</b></article>
            <article><span>02</span><h3>Проверить на пилоте</h3><p>AED 45 000 входят в бюджет следующего этапа.</p><b>Новое решение — после новых данных.</b></article>
          </div>
        </div>
      </section>

      <section className="section screen pilot" id="pilot">
        <div className="wrap">
          <div className="section-head wide"><span className="eyebrow">07 · ПИЛОТ</span><h2>Контролируемая проверка<br/><em>в рабочем контуре.</em></h2></div>
          <div className="pilot-frame">
            <div className="pilot-hypothesis"><span>РАБОЧАЯ ГИПОТЕЗА</span><h3>Первый кандидат — ввод первичных документов.</h3><p>Аудит может подтвердить его или заменить более сильным.</p></div>
            <div className="pilot-params"><div><strong>1</strong><span>процесс</span></div><div><strong>1</strong><span>участок</span></div><div><strong>3–5</strong><span>бухгалтеров</span></div><div><strong>9</strong><span>недель</span></div><div><strong>HITL</strong><span>подтверждение человеком</span></div><div><strong>Δ</strong><span>сравнение с исходным периодом</span></div></div>
          </div>
        </div>
      </section>

      <section className="section screen metrics" id="metrics">
        <div className="wrap">
          <div className="section-head wide"><span className="eyebrow">08 · КРИТЕРИИ</span><h2>Результат оценивается<br/><em>по согласованным показателям.</em></h2></div>
          <div className="metric-list">{pilotMetrics.map((metric,index) => <div key={metric}><span>{String(index+1).padStart(2,"0")}</span><p>{metric}</p></div>)}</div>
          <p className="pilot-decision"><strong>Подтверждённые показатели формируют основание для масштабирования.</strong><span>В противном случае решение пересматривается.</span></p>
        </div>
      </section>

      <section className="section paper screen economy" id="economy">
        <div className="wrap">
          <div className="section-head wide"><span className="eyebrow">09 · КОММЕРЧЕСКИЙ СМЫСЛ</span><h2>Экономический эффект возникает,<br/><em>когда время превращается в мощность.</em></h2></div>
          <div className="growth-chain"><div><span>01</span><b>Меньше ручных операций</b></div><i>→</i><div><span>02</span><b>Больше мощности команды</b></div><i>→</i><div><span>03</span><b>Больше клиентских компаний</b></div><i>→</i><div><span>04</span><b>Рост без пропорционального найма</b></div></div>
          <div className="growth-hypothesis"><span>ПРОВЕРЯЕМЫЙ СЦЕНАРИЙ</span><strong>×2–3</strong><p>Увеличить число обслуживаемых компаний на бухгалтера без пропорционального расширения команды. Это гипотеза, не прогноз.</p></div>
        </div>
      </section>

      <section className="section screen governance" id="governance">
        <div className="wrap">
          <div className="section-head wide"><span className="eyebrow">10 · ОТВЕТСТВЕННОСТЬ И ГРАНИЦЫ</span><h2>Сильное решение требует<br/><em>видимых ограничений.</em></h2></div>
          <div className="role-map">
            <article><span>01</span><h3>Спонсор</h3><p>Бюджет и решения после этапов.</p></article>
            <article><span>02</span><h3>Руководитель проекта</h3><p>Никита Осипов — сроки, координация и принятие изменений.</p></article>
            <article><span>03</span><h3>Главный бухгалтер</h3><p>Корректность учёта и владение процессом.</p></article>
            <article><span>04</span><h3>ИТ / 1С + KULBATSKII</h3><p>Выгрузки, аналитика и архитектура решения.</p></article>
            <article><span>05</span><h3>ИБ и юрист</h3><p>Допустимость обработки данных.</p></article>
          </div>
          <div className="control-strip">{controls.map(control => <span key={control}>{control}</span>)}</div>
          <div className="scope-boundary"><div><span>ВХОДИТ В АУДИТ</span><p>Измерение, карта процессов, стоимость рутины, приоритеты и обоснование пилота.</p></div><div><span>НЕ ВХОДИТ В АУДИТ</span><p>Лицензии, изменение конфигураций 1С и промышленное внедрение.</p></div></div>
        </div>
      </section>

      <section className="decision screen" id="decision">
        <div className="wrap">
          <span className="eyebrow">11 · РЕШЕНИЕ РУКОВОДСТВА</span>
          <h2>Чтобы получить ответ через 8 недель,<br/><em>сегодня нужны четыре решения.</em></h2>
          <div className="decision-grid"><article><span>01</span><div><h3>Спонсор</h3><p>Человек с правом принимать решение после аудита.</p></div></article><article><span>02</span><div><h3>Бюджет</h3><p>AED 45 000 на фиксированный контур.</p></div></article><article><span>03</span><div><h3>Доступ</h3><p>Согласованные выгрузки 1С и рабочая группа.</p></div></article><article><span>04</span><div><h3>Дата</h3><p>Зафиксированный день представления результата.</p></div></article></div>
          <div className="decision-action"><a className="btn primary" href="mailto:apk181818@gmail.com?subject=Зафиксировать%20старт%20аудита">Зафиксировать старт аудита <span>→</span></a><p>Результат этапа — не автоматизация, а точное основание для следующего решения.</p></div>
        </div>
      </section>

      <footer><div className="wrap"><div className="brand"><strong>KULBATSKII</strong><span>GULF BRIDGE</span></div><p>Никита Осипов · 2026</p><a href="#top">Наверх ↑</a></div></footer>
      <nav className="mobile-nav" aria-label="Быстрая навигация"><a href="#offer">Аудит</a><a href="#route">Маршрут</a><a href="#pilot">Пилот</a><a className="decision-link" href="#decision">Старт</a></nav>
    </main>
  );
}
