export default function counter(state: { count: any; }, action: { type: any; }) {
  const count = state.count;
  switch (action.type) {
    case "TEST":
      return { count: count + 1 };
    default:
      return state;
  }
}
