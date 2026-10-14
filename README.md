# Actividad 4 - React

## Descripción

Este proyecto es una mini aplicación de tareas desarrollada con React y Vite.

La aplicación permite:

- Mostrar una lista de tareas.
- Agregar nuevas tareas.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas.
- Mostrar dinámicamente la cantidad de tareas pendientes.

Para realizar la actividad se utilizaron componentes, props, estado con `useState`, eventos, renderizado condicional y listas con `map()`.

## Componentes utilizados

### TodoApp

Es el componente principal de la aplicación.

Se encarga de:

- Guardar las tareas mediante `useState`.
- Agregar nuevas tareas.
- Cambiar el estado de una tarea.
- Eliminar tareas.
- Renderizar la lista dinámicamente utilizando `map()`.

### ItemActividad

Es un componente hijo que recibe información mediante props.

Las props utilizadas son:

- `nombre`
- `completada`
- `onCompletar`
- `onEliminar`

Este componente muestra cada actividad y permite marcarla como completada o eliminarla.

## Conceptos utilizados

### useState

Se utiliza para guardar información que puede cambiar durante el uso de la aplicación.

En este proyecto se utiliza para guardar:

```javascript
const [tareas, setTareas] = useState([]);
```

y también el texto escrito para crear una nueva tarea:

```javascript
const [nuevaTarea, setNuevaTarea] = useState("");
```

### Eventos

Se utilizan eventos como:

```jsx
onClick
```

para agregar o eliminar tareas y:

```jsx
onChange
```

para capturar lo que el usuario escribe o cambiar el estado de una tarea.

### Renderizado condicional

La aplicación muestra un mensaje diferente cuando no existen tareas:

```jsx
tareas.length === 0
    ? <p>No hay tareas disponibles.</p>
    : ...
```

### Lista dinámica

Las tareas se muestran utilizando `map()`:

```jsx
tareas.map((tarea) => (
    <ItemActividad
        key={tarea.id}
        nombre={tarea.nombre}
        completada={tarea.completada}
    />
))
```

---

# Preguntas

## a) ¿Qué diferencia hay entre props y state en React?

Las props se utilizan para enviar información de un componente padre a un componente hijo, el state se utiliza para guardar información que puede cambiar durante la ejecución de la aplicación.

En mi proyecto, `ItemActividad` recibe datos mediante props, mientras que `TodoApp` utiliza state para guardar y modificar la lista de tareas.

## b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La `key` permite que React identifique cada elemento de una lista de manera única, esto ayuda a que React sepa qué elemento cambió, fue agregado o eliminado y pueda actualizar la interfaz correctamente.

En mi proyecto utilizo:

```jsx
key={tarea.id}
```

## c) ¿Qué hace la función useState y dónde la utilizaste en tu mini aplicación?

`useState` permite guardar valores dentro de un componente y actualizar la pantalla cuando esos valores cambian.

En mi aplicación la utilizo para guardar la lista de tareas y también el texto de la nueva tarea.

Por ejemplo:

```javascript
const [tareas, setTareas] = useState([...]);
```

Cuando agrego, completo o elimino una tarea, utilizo `setTareas` para actualizar la información y React vuelve a mostrar la lista actualizada.

## d) Enlace del repositorio de GitHub

(https://github.com/mendozavargasbraulio/t3_act4_react)

## e) Enlace del proyecto en GitHub Pages

https://mendozavargasbraulio.github.io/t3_act4_react/