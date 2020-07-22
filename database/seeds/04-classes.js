
exports.seed = async function(knex) {
   await knex('classes').insert([
      { name: 'Jogging', instructor_id: 1, type_id: 1, date: '2020-07-25', start_time: '09:00:00', duration: 45, intensity: 'moderate',
         location: 'track', number_of_attendees: 5, max_class_size: 10 },
      { name: 'Weight Training 101', instructor_id: 5, type_id: 2, date: '2020-07-26', start_time: '11:00:00', duration: 40, intensity: 'low',
         location: 'weight room 2a', number_of_attendees: 4, max_class_size: 5 },
      { name: 'Swimming 101', instructor_id: 6, type_id: 1, date: '2020-07-29', start_time: '15:30:00', duration: 45, intensity: 'moderate',
         location: 'pool',  number_of_attendees: 5, max_class_size: 10 },
      { name: 'Tai Chi', instructor_id: 13, type_id: 4, date: '2020-08-02', start_time: '14:00:00', duration: 30, intensity: 'low',
         location: 'exercise room 5b', number_of_attendees: 5, max_class_size: 10 },
      { name: 'Yoga 101', instructor_id: 13, type_id: 3, date: '2020-08-04', start_time: '13:30:00', duration: 45, intensity: 'low',
         location: 'gym', number_of_attendees: 6, max_class_size: 15 },
      { name: 'Running 101', instructor_id: 1, type_id: 1, date: '2020-08-07', start_time: '10:00:00', duration: 30, intensity: 'high',
         location: 'track', number_of_attendees: 5, max_class_size: 10 },
   ])
}
