SELECT cohorts.name as cohort_name, count(cohorts) as student_count
FROM cohorts
JOIN students ON cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING count(cohorts) >= 18
ORDER BY count(cohorts);