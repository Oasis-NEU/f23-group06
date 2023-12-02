import React from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { MailIcon } from './MailIcon.jsx';
import { Select, SelectItem, Chip } from "@nextui-org/react";

export default function MemberModal({club_id}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const labels = [
        { label: <Chip color="primary">President</Chip>, value: "President" },
        { label: <Chip color="secondary">Vice President</Chip>, value: "Vice President" },
        { label: <Chip color="success">Treasurer</Chip>, value: "Treasurer" },
        { label: <Chip color="danger">Member</Chip>, value: "Member" }
    ]

    return (
        <>
            <Button onPress={onOpen} color="primary">Add Member</Button>
            <Modal backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <form action="/backend/member" method="POST">
                            <ModalHeader className="flex flex-col gap-1">Add Member</ModalHeader>
                            <ModalBody>
                                <input type="hidden" value={club_id} name="club_id" id="club_id"></input>
                                <Input
                                    isRequired
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    variant="bordered"
                                    id="email"
                                    name="email"
                                />
                                <Input
                                    isRequired
                                    label="First name"
                                    variant="bordered"
                                    id="first"
                                    name="first"
                                />
                                <Input
                                    isRequired
                                    label="Last name"
                                    variant="bordered"
                                    id="last"
                                    name="last"
                                />
                                <label className="text-sm mb-0">Labels</label>
                                <Select
                                    items={labels}
                                    selectionMode="multiple"
                                    isMultiline={true}
                                    className="mt-0"
                                    size="lg"
                                    classNames={{
                                        base: "max-w-xs",
                                        trigger: "min-h-unit-8",
                                        innerWrapper: "pt-1 pb-1"
                                    }}
                                    renderValue={(items) => {
                                        return (
                                            <div className="flex flex-wrap gap-2">
                                                {items.map((item) => (
                                                    <div key={item.key}>{item.rendered}</div>
                                                ))}
                                            </div>
                                        );
                                    }}
                                    id="labels"
                                    name="labels"
                                >
                                    {labels.map((l) => (
                                        <SelectItem key={l.value}>
                                            {l.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <div className="flex py-2 px-1 justify-between"></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                                <Button type="submit" value="Submit" color="primary">Add</Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
