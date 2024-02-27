# **Pasos para desarrollar el proyecto**

1. En el sitio https://www.fl0.com/ crear una base de dato Postgres como fue indicado en las clases con el siguiente formato tunombre_test. (ejemplo: ignacio_test)
2. Ejecutar npm i para la instalacion de librerias en local y configurar index.js
3. Las importaciones / exportaciones deben ser con modulos ES6
4. Una vez creada la base de datos en fl0 crear archivo de base de datos en proyecto (dentro de carpeta db) y asignar valores de conexion generando una instancia de la base de datos haciendo uso de la libreria pg-pool
5. Los requerimientos de la prueba estan en el archivo info.js

## **Crear tablas en base de datos**

### administradores

```
create table administradores
(id serial not null primary key,
rut varchar(255) not null,
name varchar(255) not null);
```

### tipo_cuartel

```
create table tipo_cuartel
(id serial not null primary key,
name varchar(255) not null);
```

### cuarteles

```
create table cuarteles
(id serial not null primary key,
id_admin int not null,
id_farm int not null,
id_paddock_type int not null,
harvest_year int not null,
area int not null);
```

### granjas

```
create table granjas
(id serial not null primary key,
name varchar(255) not null);
```

- id serial quiere decir que sera numerico y sera auto incrementable, no puede ser nulo y sera la llave primaria (el identificador del dato)
- varchar(255) significa que sera un string de maximo 255 caracteres de largo
- int significa que el valor sera un numero entero (integer)
- el ; cierra la ejecucion de SQL

### para insertar valores dentro de las tablas se ejecuta la siguiente consulta

```
INSERT INTO nombredelatabla
(col1, col2, col3)
VALUES(value1, value2, value3);
```

### para insertar multiples valores

```
INSERT INTO nombredelatabla
(col1, col2, col3)
VALUES
(value1, value2, value3), ---> 1ra fila
(value1, value2, value3), ---> 2da fila
(value1, value2, value3); ---> 3ra fila
```

> NO SE DEBE INGRESAR VALOR PARA EL ID SERIAL, ESTE SE ASIGNA SOLO

### ejemplo para insertar cuartel

```
INSERT INTO cuarteles
(id_admin, id_farm, id_paddock_type, harvest_year, area)
VALUES
(6,1,1,2019,1200),
(1,3,4,2019,500);
```

### para ordenar en SQL añadir al final de la consulta

```
ORDER BY nombrecolumna ASC / ORDER BY nombrecolumna DESC
```

> ASC: ascendente
> DESC: descendente

### Para seleccionar datos de una tabla

```
SELECT * FROM nombretabla   --> Selecciona todas las columnas

 o

SELECT column1, column2, ...etc FROM nombretabla   --> Selecciona solo las columnas indicadas
```
