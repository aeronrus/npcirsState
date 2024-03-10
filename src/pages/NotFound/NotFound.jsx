import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="content__error">
      <h2>Данной страницы не существует</h2>
      <img
        src="https://img.favpng.com/24/8/2/robot-safety-robotics-formassembly-computer-png-favpng-JdQm4mMEwnt9a8Wcw98uyG7XB.jpg"
        alt="Error"
      />
      <p>
        К сожалению, страницы с данным адресом не существует. Вернитесь на главную по кнопке ниже
      </p>
      <Link to="/">
        <button>На главную</button>
      </Link>
    </div>
  );
};

export default NotFound;
