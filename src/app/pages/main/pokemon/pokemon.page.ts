import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonList: any[] = [];
  offset: number = 0;
  limit: number = 20;

  constructor(private pokemonSvc: ApiService) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList(event?: any) {
    this.pokemonSvc.getPokemonList(this.limit, this.offset).subscribe(
      (response) => {
        const newPokemon = response.results;
        this.pokemonList = [...this.pokemonList, ...newPokemon];
        this.loadPokemonDetails(newPokemon);
        
        if (event) {
          event.target.complete();
        }
        
        this.offset += this.limit;

        // Si no hay más Pokémon para cargar, deshabilitar el infinite scroll
        if (this.pokemonList.length >= response.count) {
          event.target.disabled = true;
        }
      },
      (error) => {
        console.error('Error al obtener la lista de Pokémon:', error);
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  loadPokemonDetails(pokemonList: any[]) {
    pokemonList.forEach((pokemon) => {
      this.pokemonSvc.getPokemon(this.extractPokemonId(pokemon.url)).subscribe(
        (details) => {
          pokemon.details = details;
        },
        (error) => {
          console.error(`Error al obtener detalles de ${pokemon.name}:`, error);
        }
      );
    });
  }

  extractPokemonId(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  loadMore(event: any) {
    this.loadPokemonList(event);
  }
}