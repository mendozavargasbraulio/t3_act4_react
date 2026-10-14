import styles from "./TodoApp.module.css";

function ItemActividad({
    nombre,
    completada,
    onCompletar,
    onEliminar
}) {
    return (
        <div className={styles.tarea}>
            <div>
                <input
                    type="checkbox"
                    checked={completada}
                    onChange={onCompletar}
                />

                <span
                    className={
                        completada
                            ? styles.completada
                            : ""
                    }
                >
                    {nombre}
                </span>
            </div>

            <button
                className={styles.eliminar}
                onClick={onEliminar}
            >
                Eliminar
            </button>
        </div>
    );
}

export default ItemActividad;