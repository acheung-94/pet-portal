import './EmptyReminder.css'
export default function EmptyReminders({name = 'reminder'}) {
	const an = /[aeiou]/.test(name.charAt(0))
	return <div className="empty-reminders">
		Click the <span>+</span> icon to add a{an && 'n'} {name}!
	</div>
}