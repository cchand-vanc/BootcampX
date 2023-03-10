const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const values = [process.argv[2]]

pool.query(`
SELECT DISTINCT teachers.name as name, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '$1 || 'JUL02'}'
ORDER BY teachers.name;
`, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.name}`);
  })
});
