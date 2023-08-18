import { TestBed } from '@angular/core/testing';

import { ModificarDatosService } from './modificar-datos.service';

describe('ModificarDatosService', () => {
  let service: ModificarDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
