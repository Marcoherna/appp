import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }

  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(pokemonName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${pokemonName}`);
  }

  searchPokemon(searchTerm: string): Observable<any[]> {
    // La API de Pokémon no tiene un endpoint de búsqueda directa,
    // así que obtendremos una lista más grande y filtraremos en el cliente
    return this.http.get(`${this.baseUrl}/pokemon?limit=1000`).pipe(
      map((response: any) => {
        return response.results.filter(pokemon => 
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }
}