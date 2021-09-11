import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import React from 'react';
import { Browser as Router} from "react-router-dom";
import CharacterPage from './components/CharacterPage';


test('test Character Card',async () => {
    const character = {
      url: "",
      name: "Test Character",
      films: [],
      birth_year: 13938
    }

    const {getByText} = render(
      <Router>
        <CharacterPage character={character} />
      </Router>)

      fireEvent.click(getByText(/Add/))

      expect(screen.getByText('Counter: 1')).toBeVisible()

})
