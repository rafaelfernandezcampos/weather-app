import React, { useState } from 'react';
import Input from '../../Components/Input';
import { Card, Container } from './styles';
import { useNavigate } from 'react-router-dom';

import WeatherService from '../../services/weather.service';
import weatherValidator from '../../validations/weather';
import { ValidationError } from 'yup';

interface FormElements extends HTMLFormControlsCollection {
  cityNameInput: HTMLInputElement;
}
interface WeatherFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const Weather: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<WeatherFormElement>): Promise<void> {
    try {
      event.preventDefault();
      const cityName = event.currentTarget.elements.cityNameInput.value;

      await weatherValidator.validate({ cityName }, { abortEarly: false });

      WeatherService.send(cityName).then(
        (response) => {
          console.log(response);
          setErrorMessage('');
          navigate('/weather-info', { state: { ...response, cityName } });
        },
        (error) => {
          const resMessage =
            (Boolean((error.response?.data?.message))) ||
            (Boolean(error.message)) ||
            error.toString();
          console.log(resMessage);

          setErrorMessage(resMessage);
        },
      );
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrorMessage(error.message);
      }
    }
  }

  return (
    <Container>
      <form onSubmit={() => handleSubmit}>
        <Card>
          <h1>Weather conditions</h1>

          <Input
            id="cityNameInput"
            name="cityName"
            placeholder="City name"
            defaultValue={localStorage.getItem('cityName')?.toString()}
            required
          />

          <button type="submit">SEND</button>
          {(errorMessage.length > 0) && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            </div>
          )}
        </Card>
      </form>
    </Container>
  );
};

export default Weather;
