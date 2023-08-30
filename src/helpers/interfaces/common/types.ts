import { ReactElement } from "react";

export type StringNull = string | null;

export type RouteProps = {
	component: ReactElement;
	redirectTo: string;
}

