import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  selectedPokemon: any = null;
  searchTerm: string = '';

  private pokemonSvc = inject(ApiService);

  constructor() {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokemonSvc.getPokemonList(10).subscribe( //cambie 1000 a 10
      (response) => {
        this.pokemonList = response.results;
        this.filteredPokemonList = this.pokemonList;
      },
      (error) => {
        console.error('Error al obtener la lista de Pokémon:', error);
      }
    );
  }

  loadPokemonDetails(pokemonName: string) {
    this.pokemonSvc.getPokemonDetails(pokemonName).subscribe(
      (response) => {
        this.selectedPokemon = response;
      },
      (error) => {
        console.error('Error al obtener detalles del Pokémon:', error);
      }
    );
  }

  searchPokemon() {
    if (this.searchTerm.trim() === '') {
      this.filteredPokemonList = this.pokemonList;
    } else {
      this.pokemonSvc.searchPokemon(this.searchTerm).subscribe(
        (results) => {
          this.filteredPokemonList = results;
        },
        (error) => {
          console.error('Error en la búsqueda de Pokémon:', error);
        }
      );
    }
  }
}