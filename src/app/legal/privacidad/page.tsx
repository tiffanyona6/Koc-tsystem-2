import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | KOC Technical System",
    description: "Política de Privacidad y protección de datos de KOC Technical System.",
};

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white pt-32 pb-20 md:pt-36">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-900 mb-8 border-b border-gray-100 pb-8 uppercase">
                        Política de Privacidad
                    </h1>

                    <div className="space-y-8 text-gray-600 leading-relaxed text-lg">

                        {/* 1. DATOS DEL RESPONSABLE */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">1. DATOS DEL RESPONSABLE DEL TRATAMIENTO</h2>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-base mb-6">
                                <ul className="space-y-2">
                                    <li><span className="font-semibold text-gray-900">Razón Social:</span> KOC TECHNICAL SYSTEM S.L. (en adelante, la “Empresa” o el “Responsable”).</li>
                                    <li><span className="font-semibold text-gray-900">CIF:</span> B24790644</li>
                                    <li><span className="font-semibold text-gray-900">Domicilio:</span> C/Chillida Nº4 Entrep. Edif. Carrida C.P 04720 - Roquetas de Mar - Almería</li>
                                    <li><span className="font-semibold text-gray-900">Teléfono:</span> 606442514</li>
                                    <li><span className="font-semibold text-gray-900">Email para comunicaciones en materia de Protección de datos:</span> <a href="mailto:info@koctsystem.com" className="text-primary hover:underline">info@koctsystem.com</a></li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">1.1. Normativa aplicable</h3>
                                    <p className="mb-4">
                                        Nuestra Política de Privacidad se ha diseñado de acuerdo con el Reglamento General de Protección de Datos de la UE 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), y la Ley Orgánica 3/2018 del 5 de diciembre, de Protección de Datos de Carácter Personal y Garantía de los Derechos Digitales.
                                    </p>
                                    <p className="mb-4">
                                        Al facilitarnos sus datos, Usted declara haber leído y conocer la presente Política de Privacidad, prestando su consentimiento inequívoco y expreso al tratamiento de sus datos personales de acuerdo a las finalidades y términos aquí expresados.
                                    </p>
                                    <p>
                                        La Empresa podrá modificar la presente Política de Privacidad para adaptarla a las novedades legislativas, jurisprudenciales o de interpretación de la Agencia Española de Protección de Datos. Estas condiciones de privacidad podrán ser complementadas por el Aviso Legal, Política de Cookies y las Condiciones Generales que, en su caso, se recojan para determinados productos o servicios, si dicho acceso supone alguna especialidad en materia de protección de datos de carácter personal.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">1.2. Delegado de Protección de Datos</h3>
                                    <p>
                                        No hay Delegado de Protección de Datos designado.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 2. FINALIDAD */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">2. FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES</h2>
                            <p className="mb-4">
                                El tratamiento que realizamos de sus datos personales responde a las siguientes finalidades:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 ml-2">
                                <li>Proporcionarle información relacionada con los productos y servicios que ofrece nuestra empresa y que detallan en este web site.</li>
                                <li>Realizar la contratación de nuestros servicios mediante la aceptación del correspondiente presupuesto / pedido y/o la firma de un contrato mercantil.</li>
                                <li>Enviarle por correo electrónico y/o postal las noticias y novedades acerca de nuestra entidad, así como las actualizaciones de nuestro catálogo de productos y servicios.</li>
                            </ul>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">2.1. Plazo de Conservación de sus datos</h3>
                                <p>
                                    Conservaremos sus datos personales desde que nos dé su consentimiento hasta que lo revoque o bien solicite la limitación del tratamiento. En tales casos, mantendremos sus datos de manera bloqueada durante los plazos legalmente exigidos.
                                </p>
                            </div>
                        </section>

                        {/* 3. LEGITIMACIÓN */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">3. LEGITIMACIÓN Y DATOS RECABADOS</h2>
                            <p className="mb-6">
                                La legitimación para el tratamiento de sus datos es el consentimiento expreso otorgado mediante un acto positivo y afirmativo (rellenar el formulario correspondiente y marcar la casilla de aceptación de esta política) en el momento de facilitarnos sus datos personales.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">3.1. Consentimiento para tratar sus datos</h3>
                                    <p>
                                        Al rellenar los formularios, marcar la casilla “Acepto la Política de Privacidad” y hacer clic para enviar los datos, o al remitir correos electrónicos a la Empresa a través de las cuentas habilitadas al efecto, el Usuario manifiesta haber leído y aceptado expresamente la presente política de privacidad, y otorga su consentimiento inequívoco y expreso al tratamiento de sus datos personales conforme a las finalidades indicadas.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">3.2. Categorías de datos</h3>
                                    <p>
                                        Los datos que se recaban se refieren a la categoría de datos identificativos, como pueden ser: Nombre y Apellidos, Teléfono, Dirección Postal, Empresa, Correo electrónico, así como la dirección IP desde donde accede al formulario de recogida de datos.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 4. MEDIDAS DE SEGURIDAD */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">4. MEDIDAS DE SEGURIDAD</h2>
                            <p>
                                Dentro de nuestro compromiso por garantizar la seguridad y confidencialidad de sus datos de carácter personal, le informamos que se han adoptado las medidas de índole técnica y organizativas necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que estén expuestos, según el Art. 32 del RGPD EU 679/2016.
                            </p>
                        </section>

                        {/* 5. CESIÓN DE DATOS */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">5. CESIÓN DE DATOS</h2>
                            <p>
                                No se prevén cesiones de datos ni transferencias internacionales de sus datos, a excepción de las autorizadas por la legislación fiscal, mercantil y de telecomunicaciones así como en aquellos casos en los que una autoridad judicial nos lo requiera.
                            </p>
                        </section>

                        {/* 6. DERECHOS DEL USUARIO */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">6. DERECHOS DEL USUARIO</h2>
                            <p className="mb-4">
                                Cualquier interesado tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. Por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. El Responsable del fichero dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. De acuerdo con la legislación vigente tiene los siguientes derechos: derecho a solicitar el acceso a sus datos personales, derecho a solicitar su rectificación o supresión, derecho a solicitar la limitación de su tratamiento, derecho a oponerse al tratamiento, derecho a la portabilidad de los datos y así mismo, a revocar el consentimiento otorgado. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos.
                            </p>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">6.1. ¿Cómo ejercitar mis derechos?</h3>
                                <p>
                                    Para ejercer sus derechos, debe dirigirse al responsable, solicitando el correspondiente formulario para el ejercicio del derecho elegido. Opcionalmente, puede acudir a la Autoridad de Control competente para obtener información adicional acerca de sus derechos. Los datos de contacto para el ejercicio de sus derechos son el teléfono 606442514 y el correo electrónico: <a href="mailto:info@koctsystem.com" className="text-primary hover:underline">info@koctsystem.com</a>. Recuerde acompañar una copia de un documento que nos permita identificarle.
                                </p>
                            </div>
                        </section>

                        {/* 7. CONSENTIMIENTO */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">7. CONSENTIMIENTO PARA ENVÍO DE COMUNICACIONES ELECTRÓNICAS</h2>
                            <p>
                                Así mismo, y de acuerdo con lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, completando el formulario de recogida de datos y marcando la correspondiente casilla “Acepto el envío de comunicaciones electrónicas”, está otorgando el consentimiento expreso para enviarle a su dirección de correo electrónico, teléfono, fax u otro medio electrónico en envío de información acerca de la Empresa.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
