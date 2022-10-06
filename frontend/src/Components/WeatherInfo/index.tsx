import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Container, Content, Info } from './styles';

const WeatherInfo: React.FC = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state === null || location.state === undefined) {
    navigate('/');
  }

  const {
    WeatherText,
    WeatherIcon,
    IsDayTime,
    Temperature,
    LocalObservationDateTime,
  } = location.state.conditions;
  const { name, country, region } = location.state.city;
  const { cityName } = location.state;

  const formattedDate = LocalObservationDateTime.toString()
    .split('T')[0]
    .replaceAll('-', '/');
  const formattedTime = LocalObservationDateTime.toString()
    .split('T')
    .pop()
    .split('-')[0]
    .split('+')[0];

  return (
    <Container>
      <Content>
        <Card>
          <div>
            <h1>Weather conditions of {cityName}</h1>
            <p>
              <strong>City name found: </strong>
              {name}
            </p>
            <p>
              <strong>City country: </strong>
              {country}
            </p>
            <p>
              <strong>City region: </strong>
              {region}
            </p>
          </div>
          <Info>
            <div>
              <img
                src={`https://developer.accuweather.com/sites/default/files/${
                  WeatherIcon.toString().length === 1
                    ? '0' + WeatherIcon.toString()
                    : WeatherIcon
                }-s.png`}
                width="100"
                height="65"
                alt={WeatherText}
                title={WeatherText}
              />
              <p>
                <strong>Weather condition: </strong>
                {WeatherText}
              </p>
              <p>
                <strong>Temperature: </strong>
                {Temperature.Metric.Value} °C
              </p>
            </div>
            <div>
              {(IsDayTime) ? (
                <img
                  src={`https://cdn-icons-png.flaticon.com/512/169/169367.png`}
                  width="65"
                  height="65"
                  alt="sun"
                  title="sun"
                />
              ) : (
                <img
                  src={`https://cdn-icons-png.flaticon.com/512/740/740878.png`}
                  width="65"
                  height="65"
                  alt="moon"
                  title="moon"
                />
              )}
              <p>
                <strong>{IsDayTime ? 'Day' : 'Night'}</strong>
              </p>
              <p>
                <strong>Last observed: </strong>
                {new Date(formattedDate).toLocaleDateString('en')}{' '}
                {formattedTime}
              </p>
            </div>
          </Info>
          <button onClick={() => navigate('/')}>BACK</button>
        </Card>
      </Content>
    </Container>
  );
};

export default WeatherInfo;
