import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Table, SearchBox } from './styles';
import { MdDirectionsBike } from 'react-icons/md';
import api from '../../services/api';

interface Location {
  id: number;
  city: string;
}

const Location: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filter, setFilter] = useState('');
  const history = useHistory();

  useEffect(() => {
    api.get<Location[]>('/locations').then(response => {
      setLocations(response.data);
    });
  }, []);

  const orderLocations = useMemo(() => {
    let currentLocations = locations;

    if(filter) {
      currentLocations = currentLocations.filter(location => {
        return location.city.includes(filter);
      });
    }

    return currentLocations.sort((a,b) => {
      if (a.city < b.city) return -1
      return a.city > b.city ? 1 : 0
    });
  }, [locations, filter]);

  return (
    <>
      { locations.length > 0 ? (
        <SearchBox>
          <input type="text" placeholder="Filtrar..." onChange={(e) => { setFilter(e.target.value) }} />
        </SearchBox>
      ) : ''}
      <Container>
      { orderLocations.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Cidade</th>
              <th>Estações</th>
            </tr>
          </thead>
          <tbody>
            {orderLocations.map(location => (
              <tr key={location.id}>
                <td>{location.city}</td>
                <td>
                  <button type="button" title="Estações" onClick={() => history.push(`/location/${location.id}/stations`) }>
                    <MdDirectionsBike />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ): (
        <p>Nenhuma cidade encontrada.</p>
      )}
      </Container>
    </>
  );
};

export default Location;
