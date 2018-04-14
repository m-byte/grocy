Grocy.Components.HabitCard = { };

Grocy.Components.HabitCard.Refresh = function (habitId)
{
	Grocy.FetchJson('/api/habits/get-habit-details/' + habitId,
		function(habitDetails)
		{
			$('#habitcard-habit-name').text(habitDetails.habit.name);
			$('#habitcard-habit-last-tracked').text((habitDetails.last_tracked || 'never'));
			$('#habitcard-habit-last-tracked-timeago').text($.timeago(habitDetails.last_tracked || ''));
			$('#habitcard-habit-tracked-count').text((habitDetails.tracked_count || '0'));

			EmptyElementWhenMatches('#habitcard-habit-last-tracked-timeago', 'NaN years ago');
		},
		function(xhr)
		{
			console.error(xhr);
		}
	);
};
