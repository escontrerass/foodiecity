import React from 'react';
import { Layout } from '../containers/Layout';
import { Main } from '../containers/Main';
import { Extras } from '../components/Extras';

export const Term = () => {
  return (
    <Layout>
      <Extras />
      <Main>
        <div className='flex flex-col gap-3 px-3'>
          <h4 className='font-bebas text-xl'>Términos y condiciones</h4>
          <p className='text-s'>
            Actualizado por última vez el 15 de Junio de 2022. Estas Condiciones
            del Servicio (que, junto con las Condiciones Comerciales que
            aparecen a continuación, son las "Condiciones") entran en vigor
            inmediatamente para los usuarios que accedan o utilicen el Servicio
            sin una Cuenta o para aquellos que registren Cuentas a partir del 15
            de Junio de 2022, y entrarán en vigor el 15 de Junio de 2023 para
            los usuarios con Cuentas preexistentes. Para revisar los términos
            anteriores.
          </p>
          <p className='text-s font-bold'>
            TENGA EN CUENTA: ESTAS CONDICIONES INCLUYEN DISPOSICIONES DE
            RESOLUCIÓN DE CONFLICTOS (VÉASE LA SECCIÓN 13) QUE, CON LIMITADAS
            EXCEPCIONES, REQUIEREN QUE (1) LAS RECLAMACIONES QUE PRESENTE CONTRA
            FOODIE CITY SE RESUELVAN MEDIANTE ARBITRAJE INDIVIDUAL Y VINCULANTE,
            Y (2) QUE RENUNCIE A SU DERECHO A PRESENTAR O PARTICIPAR EN
            CUALQUIER ACCIÓN O PROCEDIMIENTO COLECTIVO, GRUPAL O REPRESENTATIVO.
          </p>
          <p className='text-s'>
            Estas Condiciones rigen el acceso y el uso de nuestros productos y
            servicios, incluidos los ofrecidos a través de nuestros sitios web,
            eventos, comunicaciones (por ejemplo, correos electrónicos, llamadas
            telefónicas y mensajes de texto) y aplicaciones móviles
            (colectivamente, el "Servicio"). Al acceder o utilizar el Servicio,
            usted acepta estas Condiciones, que constituyen un contrato
            legalmente vinculante con (i) Foodie City C.A una sociedad de San
            Cristobal, Táchira, Venezuela. No acceda ni utilice el Servicio si
            no está dispuesto o no puede someterse a las Condiciones. Para
            obtener más información sobre nuestras políticas e instrucciones
            relacionadas con el Servicio
          </p>
        </div>
      </Main>
    </Layout>
  );
};
