import { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../scss/components/_card.scss';
import { useQuery } from '@tanstack/react-query';
import CardSkeleton from './CardSkeleton';
import { addRequest } from '../../api/axios';
import Error from '../../pages/Error/Error';

const Card = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['card'],
    queryFn: () =>
      addRequest.get(`/${id}`).then((res) => {
        console.log(data);
        return res.data;
      }),
  });

  const { id } = useParams();

  console.log(data);
  const navigate = useNavigate();

  return (
    <div className="card">
      {isError ? (
        <Error />
      ) : isLoading ? (
        <CardSkeleton />
      ) : (
        <>
          <img src={data.profileUrl} alt="У пользователя нет изображения в базе данных" />
          <div className="personal">
            <h2>Фамилия: {data.surname}</h2>
            <h2>Имя: {data.name}</h2>
            <h2>Отчество: {data.patronymic}</h2>
            <p>Дата рождения: {data.birthDate}</p>
          </div>
          <div className="request_problem">
            <p>Дата подачи заявки: {data.applicationDate}</p>
            <p>Проблемный вопрос: {data.description}</p>
          </div>
        </>
      )}
      <NavLink to="/">
        <button className="card_btn">
          <span>Назад</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Card;
