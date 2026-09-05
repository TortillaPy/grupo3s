/// <reference types="astro/client" />

interface ImportMetaEnv {
  /**
   * Access key pública de Web3Forms. Es pública por diseño: identifica
   * la casilla de destino, no autoriza a leer nada. Se obtiene en
   * https://web3forms.com con el correo donde querés recibir las
   * solicitudes. Ver .env.example.
   */
  readonly PUBLIC_WEB3FORMS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
