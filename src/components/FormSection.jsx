import "../styles/FormSection.css";

function FormSection() {
  return (
    <section className="form-section">

      {/* HEADLINE */}
      <h1>Подбор программы</h1>

      <p className="subtext">
        Заполните анкету, и мы подберем программу питания для вашего кота
      </p>

      {/* TOP FORM */}
      <div className="form-top">

        {/* LEFT INPUTS */}
        <div className="form-left">

          <div className="field">
            <label>ИМЯ:*</label>
            <input type="text" placeholder="БАРСИК" />
          </div>

          <div className="field">
            <label>ВЕС (КГ):*</label>
            <input type="text" placeholder="7" />
          </div>

          <div className="field">
            <label>ВОЗРАСТ (ЛЕТ):</label>
            <input type="text" placeholder="7" />
          </div>

        </div>

        {/* RIGHT RADIO */}
        <div className="form-right">

          <label className="radio">
            <input type="radio" name="goal" defaultChecked />
            <span></span>
            ПОХУДЕНИЕ
          </label>

          <label className="radio">
            <input type="radio" name="goal" />
            <span></span>
            НАБОР МАССЫ
          </label>

          <label className="radio">
            <input type="radio" name="goal" />
            <span></span>
            НЕ ЗНАЮ (НУЖЕН ВАШ СОВЕТ)
          </label>

        </div>

      </div>

      {/* CONTACT TITLE */}
      <div className="section-title">
        <span>Контактные данные (владельца кота)</span>
      </div>

      {/* CONTACT */}
      <div className="form-contact">

        <div className="field">
          <label>E-MAIL:*</label>
          <input type="text" placeholder="kuklachev@gmail.com" />
        </div>

        <div className="field">
          <label>ТЕЛЕФОН:*</label>
          <input type="text" placeholder="8 (960) 900-60-90" />
        </div>

      </div>

      {/* COMMENT TITLE */}
      <div className="section-title">
        <span>Комментарий</span>
      </div>

      {/* TEXTAREA */}
      <textarea placeholder="Расскажите обо всех повадках кота"></textarea>

      {/* EXTRA TITLE */}
      <div className="section-title">
        <span>Дополнительно</span>
      </div>

      {/* CHECKBOXES */}
      <div className="extras">

        <label><input type="checkbox" defaultChecked /> Сахарозаменитель</label>
        <label><input type="checkbox" /> Питьевая вода</label>
        <label><input type="checkbox" /> Молоко</label>
        <label><input type="checkbox" /> Витамины</label>

      </div>

      {/* SUBMIT */}
      <div className="submit-row">
        <button>ОТПРАВИТЬ ЗАЯВКУ</button>
        <p>* — Обязательные поля</p>
      </div>

    </section>
  );
}

export default FormSection;
