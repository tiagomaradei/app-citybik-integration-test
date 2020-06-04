import React, { useState, useEffect, useMemo } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Container, Table, SearchBox, Header } from './styles';
import api from '../../services/api';

type TParams = {
  id: string;
}

interface Station {
  id: number;
  name: string;
  free_bikes: number;
}

interface Location {
  location: {
    city: string;
    stations: Station[];
  }
}

const Station = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const [stations, setStations] = useState<Station[]>([]);
  const [city, setCity] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.get<Location>(`/location/${id}/stations`).then(response => {
      const { location } = response.data;
      setCity(location.city);
      setStations(location.stations);
    });
  }, [id]);

  const orderStations = useMemo(() => {
    let currentStations = stations;

    if(filter) {
      currentStations = currentStations.filter(station => {
        return station.name.includes(filter);
      });
    }

    return currentStations.sort((a,b) => {
      if (a.name < b.name) return -1
      return a.name > b.name ? 1 : 0
    })
  }, [stations, filter]);

  return (
    <>
      <Header>
        <div>
          <h1>{city}</h1>
          <Link to="/">Voltar</Link>
        </div>
      </Header>
      { stations.length > 0 ? (
        <SearchBox>
          <input type="text" placeholder="Filtrar..." onChange={(e) => { setFilter(e.target.value) }} />
        </SearchBox>
      ) : ''}
      <Container>
      { orderStations.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Bikes disponíveis</th>
            </tr>
          </thead>
          <tbody>
            {orderStations.map(station => (
              <tr key={station.id}>
                <td>{station.name}</td>
                <td>
                {station.free_bikes}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ): (
        <p>Nenhuma estação encontrada.</p>
      )}
      </Container>
    </>
  );
};

export default Station;
