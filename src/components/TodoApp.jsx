import { useState } from "react";
import ItemActividad from "./ItemActividad";
import styles from "./TodoApp.module.css";

function TodoApp() {
    const [tareas, setTareas] = useState([
        { id: 1, nombre: "Ver video de React", completada: true },
        { id: 2, nombre: "Practicar componentes", completada: false },
        { id: 3, nombre: "Subir proyecto a GitHub", completada: false }
    ]);

    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") {
            return;
        }

        const tarea = {
            id: Date.now(),
            nombre: nuevaTarea,
            completada: false
        };

        setTareas([...tareas, tarea]);
        setNuevaTarea("");
    };

    const completarTarea = (id) => {
        const nuevasTareas = tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: !tarea.completada
                };
            }

            return tarea;
        });

        setTareas(nuevasTareas);
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(
            (tarea) => tarea.id !== id
        );

        setTareas(nuevasTareas);
    };

    return (
        <div className={styles.contenedor}>
            <h2>Mis tareas</h2>

            <p className={styles.contador}>
                Tareas pendientes:{" "}
                {tareas.filter((tarea) => !tarea.completada).length}
            </p>

            <div className={styles.formulario}>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea..."
                    value={nuevaTarea}
                    onChange={(evento) =>
                        setNuevaTarea(evento.target.value)
                    }
                />

                <button onClick={agregarTarea}>
                    Agregar
                </button>
            </div>

            {tareas.length === 0 ? (
                <p>No hay tareas disponibles.</p>
            ) : (
                tareas.map((tarea) => (
                    <ItemActividad
                        key={tarea.id}
                        nombre={tarea.nombre}
                        completada={tarea.completada}
                        onCompletar={() =>
                            completarTarea(tarea.id)
                        }
                        onEliminar={() =>
                            eliminarTarea(tarea.id)
                        }
                    />
                ))
            )}
        </div>
    );
}

export default TodoApp;